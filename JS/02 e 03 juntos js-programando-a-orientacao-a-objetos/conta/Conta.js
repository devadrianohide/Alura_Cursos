//Classe abstrata, so serve pra ser herdada
export class Conta {
   

    constructor(saldoInicial, cliente, agencia) {
        if(this.constructor == Conta){
            throw new Error ("Você não deveria instanciar um objeto do tipo conta diretamente, pois essa é uma classe abstrata")
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
        
       
       
    }

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }


    //metodo abstrato, feito pra n fazer nada!, é para ser sobscrito!, se eu não criar um metodo sacar direto na conta salario por exemplo, e rodar, ele vai mostrar esse erro, caso contrario, se tiver um sacar lá, ele vai rodar aquele sacar!!! e não vai vir pra cá!!!    
    sacar(valor) {
        throw new Error ("O metodo sacar da conta é abstrato.")
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
    }

    depositar(valor) {
        this._saldo += valor;
    }

    tranferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}