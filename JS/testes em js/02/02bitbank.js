import {contaCorrente} from "./ContaCorrent.js"
import { cliente } from "./cliente.js"



const cliente1 = new cliente("Adriano Ferreira", 5555)
const contaCorrenteAdriano = new contaCorrente(cliente1, 1001)
contaCorrenteAdriano.depositar(10000)
contaCorrenteAdriano.sacar(1000)

/*
const cliente2 = new cliente("Cinthia Damasceno", 88888)
const contaCorrenteCinthia = new contaCorrente(cliente2, 1009)*/




console.log(contaCorrenteAdriano)








