import express from 'express'

const app = express()

app.get('/', (request, response) => {

  response.sendFile( __dirname+ "/public/index.html");
})

app.get('/adios', (request, response) => {

  response.sendFile( __dirname +"/public/adios.html");
})

export default app;