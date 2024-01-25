/***********************************************************
 * Objetivo; calcular a tabuada de um determinado número
 * Data; 06/09/2023
 * Autor: Gabrielle Bueno
 * Versã0 1.0
 ***********************************************************/

const gerarTabuada = function(valorTabuada, valorInicial, valorFinal){

    //Rece os valores dos argumetos da função em variaveis locais
    let tabuada = valorTabuada
    let contadorInicial = valorInicial
    let contadorFinal = valorFinal

    let resultado;
    let status = false;

    //Validação de entrada em branco
    if(tabuada == '' || contadorInicial == '' || contadorFinal == '')
    console.log('ERRO: É obrigatório a digitação de todos os valores')
    //Validação de caracteres inválidos
    else if(isNaN(tabuada) || isNaN(contadorInicial) || isNaN(contadorFinal))
    console.log('ERRO: É obrigatório a digitação de todos os valores númericos')
    else{

        //Conversão de tipo de dados de string para number
        contadorInicial = Number(contadorInicial);
        contadorFinal = Number(contadorFinal);
        tabuada = Number(tabuada);

        //Tratamento para garantir que o contadorInicial aempre seja menor que o final
        if(contadorInicial > contadorFinal){
            contadorInicial = valorFinal;
            contadorFinal = valorInicial;

        }

        //Exemplo WHILE
        //while(contadorInicial <= contadorFinal){
           // resultado = tabuada * contadorInicial;
            //console.log(`${tabuada} x ${contadorInicial} = ${resultado}`);
            //contadorInicial = contadorInicial -1;
            //contadorInicial++;
            //contadorInicial+=1;
            //status = true;
        //}

        //Exemplo usando o FOR 
        for (;contadorInicial <= contadorFinal; contadorInicial++) {
            resultado = tabuada * contadorInicial;
            console.log(`${tabuada} x ${contadorInicial} = ${resultado}`);
            status = true;
        }
    }

    return status;

}

//console.log(gerarTabuada('5', '2' ,'10'));
module.exports = {
    gerarTabuada
}
