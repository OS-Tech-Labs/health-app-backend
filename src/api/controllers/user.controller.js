import {
  comparePassword,
  generateHash,
} from "../services/user.service.js"
import  User  from "../models/user.model.js"

const login = async (req, res) => {
  const username = req.body.username
  const password = req.body.password

  try {
    const user = await User.getUserByUsername(username)

    if (user === null) {
      console.log("User not found")
      return res.send({ approved: false })
    }
    const hash = user.hash
    const match = await comparePassword(password, hash)
    console.log(username, password, hash)
    if (match) {
      console.log("Login successful")
      return res.send({ approved: true })
    } else {
      console.log("Login failed")
      return res.send({ approved: false })
    }
  } catch (err) {
    console.log(err)
    return res.send({ approved: false })
  }
}

const register = async (req, res) => {
  const username = req.body.username
  const password = req.body.password
  const email = req.body.email
  const type = req.body.type

  const hash = await generateHash(password)
  try {
    const user = await User.createUser(username, hash, type, email)
  } catch (err) {
    console.log(err)
    return res.send({ approved: false })
  }

  console.log("Registration function")
}

export default { login, register }
