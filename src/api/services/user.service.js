import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export const getUserHash = async (username) => {
  const user = await prisma.user.findFirst({
    where: {
      OR: [
        { email_address: username },
        { username }
      ]
    },
    select: { hash: true }
  })

  return user ? user.hash : null
}

export const comparePassword = async (password, hash) => {
  return await bcrypt.compare(password, hash)
}
