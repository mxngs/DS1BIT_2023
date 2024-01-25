/****************************************************
 * objetivo: Criar um sistema que gerencie as médias 
 * escolares de uma universidade
 * autor: Gabrielle
 * versão: 1.0
 * ****************************************************/

const mediaCalculo = function(nota1, nota2, nota3, nota4){
    let n1 = nota1
    let n2 = nota2
    let n3 = nota3
    let n4 = nota4

    let media = (n1 + n2 + n3 + n4) / 4
    return media
}


module.exports = {
    mediaCalculo
}