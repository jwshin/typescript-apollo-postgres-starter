import migration from "./migration"
import apolloServer from "./apollo"
import { createServer } from "http"
import express from "express"

const startServer = async () => {
  const app = express()
  const httpServer = createServer(app)

  await migration()

  await apolloServer.start()

  apolloServer.applyMiddleware({
    app,
    path: "/graphql",
  })

  httpServer.listen({ port: process.env.PORT || 4000 }, () =>
    console.log(
      `Server listening on http://localhost:4000${apolloServer.graphqlPath}`
    )
  )
}

startServer()
