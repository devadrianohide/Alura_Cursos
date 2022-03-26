console.log(`Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
)

const idadeComprador = 15;
const estaAcompanhada = true;
const temPassagemComprada = true;


console.log("Destinos possiveis");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade, Salvador vendido");
//     listaDeDestinos.splice(0, 1);//remover se pessoa menor de idade, como fazer ?
// } else if (estaAcompanhada) {
//         console.log("Comprador acompanhado com maior de idade, Salvador vendido");
//         listaDeDestinos.splice(0, 1);
//     } else {
//         console.log("Comprador menor de idade, e não acompanhada, não posso vender");
//     }



if (idadeComprador >= 18 || estaAcompanhada ==true) {
    console.log("Boa viagem \n\n");
    listaDeDestinos.splice(0, 1);//remover se pessoa menor de idade, como fazer ?
}else {
    console.log("Comprador menor de idade, e não acompanhada, não posso vender");
}

console.log("Embarque: \n");
if(idadeComprador >=18 && temPassagemComprada) {
console.log("Boa Viagem");
}else {
    console.log("Você não pode embarcar...")
}













console.log(listaDeDestinos);