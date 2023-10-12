import { mongoose, db } from "./db.js"

db.once("open", function () {
  console.log("Database Connected")
})

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String,
})

const User = mongoose.model("User", userSchema)

export default User
