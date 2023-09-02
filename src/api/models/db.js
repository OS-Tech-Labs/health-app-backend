import pkg from "pg"
import dotenv from "dotenv"

const { Pool } = pkg
dotenv.config()

const db = new Pool({
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  ssl: {
    rejectUnauthorized: false, // Insecure option, use cautiously
  },
})

export default db
