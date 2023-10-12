import User from "../models/user.model.js"

const login = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.findOne({ email })
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({ error: "Error fetching data" })
  }
}

const register = async (req, res) => {
  const { name, email, password } = req.body
  const user = new User({ name, email, password })

  user
    .save()
    .then((savedUser) => {
      res.status(201).json(savedUser)
      console.log(savedUser) // Return the saved user data
    })
    .catch((err) => {
      res.status(500).json({ error: "Error saving user" })
    })
}

export default { login, register }
