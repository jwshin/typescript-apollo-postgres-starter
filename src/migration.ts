import { Client } from "pg"
import { migrate } from "postgres-migrations"

const migrations = async () => {
  const client = new Client()
  await client.connect()

  try {
    await migrate({ client }, "migrations")
  } finally {
    await client.end()
  }
}

export default migrations
