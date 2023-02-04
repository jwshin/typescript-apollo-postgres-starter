import { ApolloServer } from "@apollo/server"
import gql from "graphql-tag"
import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default"
import { ApolloServerPluginLandingPageDisabled } from "@apollo/server/plugin/disabled"
import postgres from "postgres"

const sql = postgres()

console.log(
  `Postgres on ${process.env.PGUSER}@${process.env.PGHOST}:${process.env.PGPORT}/${process.env.PGDATABASE}`
)

const typeDefs = gql`
  type Query {
    boards: [Board]
  }

  type Board {
    id: ID!
    title: String!
    description: String
    path: String!
  }
`

const resolvers = {
  Query: {
    boards: () => {
      return sql`SELECT * FROM board`.execute()
    },
  },
}

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  persistedQueries: false,
  plugins: [
    // Install a landing page plugin based on NODE_ENV
    process.env.NODE_ENV === "production"
      ? ApolloServerPluginLandingPageDisabled()
      : ApolloServerPluginLandingPageLocalDefault({ footer: false }),
  ],
})

export default apolloServer
