import { getUserHash, comparePassword } from '../services/userService.js'

const login = async (req, res) => {
  const username = req.body.username
  const password = req.body.password

  const hash = await getUserHash(username)

  if (!hash) {
    return res.send({ approved: false })
  }

  const match = await comparePassword(password, hash)
  console.log(username, password, hash)
  if (match) {
    console.log('Login successful')
    return res.send({ approved: true })
  } else {
    console.log('Login failed')
    return res.send({ approved: false })
  }
}

const register = async (req, res) => {
  console.log('Registration function')
}

export default { login, register }
