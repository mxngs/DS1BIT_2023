/**********************************************************************
 * Objetivo: Criar um Back-End para no futuro integrar em uma API que terá  
 * como objetivo trazer informações sobre os estados do Brasil.
 * Data: 18/10/2023
 * Autor: Gabrielle
 * Versão> 1.0
 ***********************************************************************/
var estados_cidades = require('./estados_cidades.js/');

const getListaDeEstados = function(){

    let siglasARRAY = []
    let JSONestados = {}

    estados_cidades.estadosCidades.estados.forEach(estado => {
        siglasARRAY.push(estado.sigla)
    })

    JSONestados.UF = siglasARRAY
    JSONestados.Quantidade = siglasARRAY.length
    

}

getListaDeEstados();






