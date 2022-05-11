function tocaSom (idParametroTocaSom) {
    document.querySelector(idParametroTocaSom).play()
}

const teclaGeral = document.querySelectorAll('.tecla')

for(let contador = 0 ; contador < teclaGeral.length ; contador++){
    const tecla = teclaGeral[contador]
    const instrumeto = tecla.classList[1]

    const idAudio = `#som_${instrumeto}`

    tecla.onclick = function (){
        tocaSom(idAudio)
    }
}











