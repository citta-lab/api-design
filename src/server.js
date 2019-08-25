import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

import itemRouter from '../src/resources/item/item.router'

export const app = express()
const router = express.Router()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

router.get('/me', (req, res) => {
  res.send({ message: 'You called router me' })
})

app.use('/about', router)
app.use('/item', itemRouter)

const log = (req, res, next) => {
  console.log('logging')
  next() // allows to continue executing the next script in the stack
}

// example to send message when / is hit
app.get('/', log, (req, res) => {
  res.send({ message: 'hello' })
})

// example to post on /
app.post('/', (req, res) => {
  console.log(req.body)
  res.send({ message: 'ok' })
})

app.post('/apply', (req, res) => {
  const msg = req.body.message
  const sendBody = {
    postBody: msg,
    status: 'ok'
  }
  res.send({ message: sendBody })
  console.log(' we received message : ' + msg)
})

// listening on post
export const start = () => {
  app.listen(3000, () => {
    console.log('server running on port :3000')
  })
}
