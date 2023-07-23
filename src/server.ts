import express from 'express'

const app = express()

app.get('/', (request, response) => {

  response.sendFile("E:/code/MarvelVidas/src/public/index.html");
})

app.get('/adios', (request, response) => {

  response.sendFile("E:/code/MarvelVidas/src/public/adios.html");
})

export default app;