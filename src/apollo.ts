import { ApolloServer, gql } from "apollo-server-express"
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
})

export default apolloServer
