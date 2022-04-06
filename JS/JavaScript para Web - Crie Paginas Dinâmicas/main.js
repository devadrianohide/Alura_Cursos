function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}



const listaDeTeclas = document.querySelectorAll('.tecla');




let contador = 0;

while(contador < listaDeTeclas.length){

    const tecla = listaDeTeclas[contador]; //<button class="tecla tecla_tim">tim</button>
    const instrumento = tecla.classList[1]; //tecla_tim

    

    //template string linha abaixo
    const idAudio = `#som_${instrumento}`;
    console.log(idAudio)

    //'#som_{instrumento}'

    tecla.onclick = function () {
        tocaSom(idAudio)
    }
    contador = contador + 1

    console.log(contador)
}