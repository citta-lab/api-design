import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

// example to send message when / is hit
app.get('/', (req, res) => {
  res.send({ message: 'hello' })
})

// example to post on /
app.post('/', (req, res) => {
  console.log(req.body)
  res.send({ message: 'ok' })
})

// listening on post
export const start = () => {
  app.listen(3000, () => {
    console.log('server running on port :3000')
  })
}
