import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World! Se contar vidas')
})

export default app;