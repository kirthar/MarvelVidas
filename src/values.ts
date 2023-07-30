import {HpVillain, HpU1, HpU2, HpU3, HpU4} from './index' ;

let ContenidoHpVillain= document.getElementById("VillainNumber") as HTMLElement

let ContenidoHpU1= document.getElementById("U1Number") as HTMLElement
let ContenidoHpU2= document.getElementById("U2Number") as HTMLElement
let ContenidoHpU3= document.getElementById("U3Number") as HTMLElement
let ContenidoHpU4= document.getElementById("U4Number") as HTMLElement

ContenidoHpVillain.textContent= HpVillain.toString()

ContenidoHpU1.textContent=HpU1.toString()
ContenidoHpU2.textContent=HpU2.toString()
ContenidoHpU3.textContent=HpU3.toString()
ContenidoHpU4.textContent=HpU4.toString()

