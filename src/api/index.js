
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0

// client.query('SELECT t.* FROM public."User" t LIMIT 501', (err, res) => {
//   if (!err) {
//     console.log(res.rows)
//     console.log('hi')
//   } else {
//     console.log(err.message)
//   }
// })

import express, { json } from 'express'
import pkg from 'body-parser'
import session from 'express-session'
import cors from 'cors'
import cookieParser from 'cookie-parser'

import UserRoute from './routes/user.routes.js'

const app = express()
const { urlencoded } = pkg
const PORT = process.env.PORT || 3002

app.listen(PORT, () => console.log(`Server live at http://localhost:${PORT}`))

app.use(cors())
app.use(urlencoded({ extended: false }))
app.use(session({ secret: 'secret', resave: true, saveUninitialized: true }))
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(json())
app.use(cookieParser())

process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0
// Route for index
app.use('/user', UserRoute)
