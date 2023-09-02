import bcrypt from "bcrypt"

export const comparePassword = async (password, hash) => {
  return await bcrypt.compare(password, hash)
}

export const generateHash = async (password) => {
  return await bcrypt.hash(password, 10)
}
