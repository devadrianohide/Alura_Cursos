console.log(`\nTrabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
)

const idadeComprador = 15;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "Salvador";


console.log("\nDestinos possiveis");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
while (contador < 3) {
    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;
        break;
    }
    contador = contador + 1;
}
console.log("Destino Existe: ", destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa Viagem");
}else {
    console.log("Desculpe, erro encontrado.")
}





///FOR


for (let cont= 0 ; cont <3; cont++ ) {
    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;
    }
}


    //contador +=1 ;  a maioria dos programadores escrevem assim, mas ainda vou me acostumar



