//dessa maneira abaixo é inviavel de se trabalhar, se fosse por exemplo centenas de cidades... ia dar ruim, usar Arrays nesse caso = Listas...
//console.log(`Trabalhando com listas`);
//const salvador = `Salvador`;
//const saoPaulo = `São Paulo`;
//const rioDeJaneiro = `Rio de Janeiro`;


//console.log("Destinos possiveis:");
//console.log (salvador, saoPaulo, rioDeJaneiro);

console.log(`Trabalhando com listas`);

const listaDeDestinos = new Array(
    `Salvador`,`São Paulo`,`Rio de Janeiro`, `Curitiba`,
)


console.log (listaDeDestinos);

listaDeDestinos.push(`Nova York`); //Adiciona um item na lista
console.log(listaDeDestinos);


listaDeDestinos.splice(4,1); // remove 
console.log(listaDeDestinos);
console.log(listaDeDestinos[0] + " e " + listaDeDestinos[1]);

