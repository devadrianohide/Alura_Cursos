function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}



const listaDeTeclas = document.querySelectorAll('.tecla');






for (let contador = 0 ; listaDeTeclas.length; contador++ ){

    const tecla = listaDeTeclas[contador]; //<button class="tecla tecla_tim">tim</button>
    const instrumento = tecla.classList[1]; //tecla_tim
    const idAudio = `#som_${instrumento}`;  //template string linha abaixo
    

    //'#som_{instrumento}'

    tecla.onclick = function () {
        tocaSom(idAudio)
    }
   

    
    ///daqui pra baixo começa as funções para navegação pelo teclado usando o MIDI

    tecla.onkeydown = function (evento){

        console.log(evento.code === 'Space' )

        if(evento.code === 'Space' ||  evento.code === 'Enter'){
        tecla.classList.add('ativa');
        }

    }       

    tecla.onkeyup = function (){
        tecla.classList.remove('ativa')
    }
    

}