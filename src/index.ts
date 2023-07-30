console.log("Hola Mundo TS");

const PORT  = 3001;
import express from 'express'
import app from "./server";
import readNumberFromFile from './leer_vidas';

import favicon from "serve-favicon"
import { error } from 'console';

const Filename:string="./Vida_Villano.txt"


app.listen(PORT , () => {
  console.log(`Example app listening on port ${PORT}`)
})
app.use(favicon(__dirname + "/public/images/escudo_capi.jpg")); 

app.use((express.static(__dirname+"/public")));//


let HpVillain= readNumberFromFile(Filename)
.then((HP)=>{
  console.log("Ur Villain HP is: " + HP)

})
.catch((error)=>{

  console.log("something has suceded reading the villain HP: "+ error)

})