const destinos = new Array (
    `londres`,
    `são paulo`,
    `paraguai`,
    `chile`,
    `russia`,
    `estados unidos`,
    `egito`,
    `canada`,
)


class Viajante {
    nome;
    idade;
    destino;
    acompanhada;
}

const passageiro1 = new Viajante()
passageiro1.nome = "Adriano"
passageiro1.idade = 28
passageiro1.destino = "londres"
passageiro1.acompanhada = false


const passageiro2 = new Viajante()
passageiro2.nome = "Cinthia Damasceno"
passageiro2.idade = 29
passageiro2.destino = "paraguai"
passageiro2.acompanhada = true


const passageiro3 = new Viajante()
passageiro3.nome = "Angelina Damasceno Sanches Ferreira Sales"
passageiro3.idade = 1
passageiro3.destino = "paraguai"
passageiro3.acompanhada = true

let contador = 0


while(contador <= destinos.length){
    if(passageiro3.destino == destinos[contador]){
    console.log(`Parabéns, ${passageiro3.nome} voo para o ${passageiro3.destino} disponivel, agora compre sua passagem.`)
    break
    }
    contador += 1
}


if(passageiro3.idade >= 18 || passageiro3.acompanhada == true){
    console.log(`Parabéns ${passageiro3.nome}, você pode comprar sua passagem!`)
}else {
    console.log(`Passagem negada.`)
}






