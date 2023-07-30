console.log("Hola Mundo TS");

const PORT  = 3001;
import express from 'express'
import app from "./server";
import readNumberFromFile from './leer_vidas';

import favicon from "serve-favicon"
import { error } from 'console';

const Filenamevillain:string="./Vida_Villano.txt"
const FilenameU1:string="./Vida_U1.txt"
const FilenameU2:string="./Vida_U2.txt"
const FilenameU3:string="./Vida_U3.txt"
const FilenameU4:string="./Vida_U4.txt"

app.listen(PORT , () => {
  console.log(`Example app listening on port ${PORT}`)
})
app.use(favicon(__dirname + "/public/images/escudo_capi.jpg")); 

app.use((express.static(__dirname+"/public")));//

app.use((req, res, next) => {
  res.setHeader('Content-Type', 'application/javascript');
  next();
});

let HpVillain = readNumberFromFile(Filenamevillain)
.then((HP)=>{
  console.log("Ur Villain HP is: " + HP)

})
.catch((error)=>{

  console.log("something has suceded reading the villain HP: "+ error)

})

let HpU1  = readNumberFromFile(FilenameU1)
.then((HP)=>{
  console.log("User 1 HP is: " + HP)

})
.catch((error)=>{

  console.log("something has suceded reading the villain HP: "+ error)

})

let HpU2  = readNumberFromFile(FilenameU2)
.then((HP)=>{
  console.log("User 2 HP is: " + HP)

})
.catch((error)=>{

  console.log("something has suceded reading the villain HP: "+ error)

})

let HpU3  = readNumberFromFile(FilenameU3)
.then((HP)=>{
  console.log("User 3 HP is: " + HP)

})
.catch((error)=>{

  console.log("something has suceded reading the villain HP: "+ error)

})

let HpU4  = readNumberFromFile(FilenameU4)
.then((HP)=>{
  console.log("User 4 HP is: " + HP)

})
.catch((error)=>{

  console.log("something has suceded reading the villain HP: "+ error)

})



export  {HpVillain, HpU1, HpU2, HpU3, HpU4}