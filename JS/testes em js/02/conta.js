export class conta {
    constructor (saldoInicial, cliente, agencia){
        this._saldo = saldoInicial
        this._cliente = cliente
        this._agencia = agencia 
    }

    set cliente(novoValor){   //set protege a propriedade cliente de receber qualquer valor lá embaixo, ele so vai aceitar se tiver no padrão de objeto cliente
        if(novoValor instanceof cliente)
        this.cliente = novoValor
    }


    get cliente(){  //acessor do cliente, sem esse get se eu coloco la embaixo console.log(contaCorrenteAdriano.cliente), ele me retorna indefined, ele só vai mostrar se eu permitir aqui
        return this.cliente
    }

    get saldo(){
        return this.saldo
    }


    depositar(valor) {
        this._saldo += valor;
    }


    _sacar(valor, taxa){
        const valorSacado = valor * taxa
        if(this._saldo >= valorSacado ){
            this._saldo -= valorSacado
            return valorSacado
         
        }
    }

    transferir(valor, conta){
        let valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)
    }

}