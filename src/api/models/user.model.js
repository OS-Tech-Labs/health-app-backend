// const db = require("./db") // Import your database configuration
import db from "./db.js"
class User {
  constructor(id, username, email, hash, type) {
    this.user_id = id
    this.username = username
    this.email = email
    this.hash = hash
    this.user_type = type
  }

  static async createUser(username, hash, type, email) {
    const { rows } = await db.query(
      "INSERT INTO public.'User' (user_id, hash, user_type, username, email_address) VALUES (DEFAULT, $1, $2, $3, $4);",
      [hash, type, username, email]
    )

    const newUser = rows[0]
    return new User(
      newUser.user_id,
      newUser.username,
      newUser.email_address,
      newUser.hash,
      newUser.user_type
    )
  }

  static async getUserByUsername(username) {
    const { rows } = await db.query(
      'SELECT * FROM public."User" WHERE username = $1',
      [username]
    )
    const user = rows[0]
    
    return new User(
      user.user_id,
      user.username,
      user.email_address,
      user.hash,
      user.user_type
    )
  }
}

export default User
