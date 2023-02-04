import migration from "./migration"
import apolloServer from "./apollo"
import { expressMiddleware } from "@apollo/server/express4"
import { createServer } from "http"
import express from "express"
import cors from "cors"
import { json } from "body-parser"

const PORT = process.env.PORT || 4000
const PREFIX = "/graphql"

const startServer = async () => {
  const app = express()
  const httpServer = createServer(app)

  await migration()

  await apolloServer.start()

  app.use(
    PREFIX,
    cors<cors.CorsRequest>(),
    json(),
    expressMiddleware(apolloServer)
  )

  httpServer.listen({ port: PORT }, () =>
    console.log(`Server listening on http://localhost:${PORT}${PREFIX}`)
  )
}

startServer()
