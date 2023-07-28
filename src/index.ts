console.log("Hola Mundo TS");

const PORT  = 3001;
import express from 'express'
import app from "./server";


import favicon from "serve-favicon"

app.listen(PORT , () => {
  console.log(`Example app listening on port ${PORT}`)
})
app.use(favicon(__dirname + "/public/images/escudo_capi.jpg")); 


//app.use((express.static(__dirname+"/public")));//
