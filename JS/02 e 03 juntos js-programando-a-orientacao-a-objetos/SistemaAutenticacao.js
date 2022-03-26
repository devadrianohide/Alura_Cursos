/*
Ser autenticavel significa ter o metodo "autenticar"
*/ 


//duck typing
export class SistemaAutenticacao{
    static login(autenticavel, senha){
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar (senha) 
        }
        return false
    }



    //verificando se essa chave autenticar, tem dentro do objeto autenticavel, a chave que pesquina na memoria o que de fato tem dentro de "autenticar"
    static ehAutenticavel(autenticavel) {
       return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function
    }
}