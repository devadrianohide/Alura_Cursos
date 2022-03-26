import {conta} from "./conta.js"
export class contaCorrente extends conta {
    constructor(cliente, agencia){
        super(0,cliente, agencia)
    }

    sacar(valor){
        let taxa 1.1
        return this._sacar(valor, taxa)
    }
    
}