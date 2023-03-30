import client from '../../db/pool.js'

process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0

client.query('SELECT t.* FROM public."User" t LIMIT 501', (err, res) => {
  if (!err) {
    console.log(res.rows)
    console.log('hi')
  } else {
    console.log(err.message)
  }
})
