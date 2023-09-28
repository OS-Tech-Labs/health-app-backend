import express from "express"

import userController from "../controllers/chat.controller.js"

const { login, register } = userController
const router = express.Router()

router.get("/")
router.post("/login", login)
router.post("/register", register)

// module.exports = router

export default router
