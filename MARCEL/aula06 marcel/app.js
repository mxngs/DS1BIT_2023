//Import a biblioteca que realiza 0 calculo da tabuada
var calculoTabuada = require('./modulo/tabuada.js');
var readline = require ('readline');

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Digite a tabuada a ser calculada: ', function(valorTabuada){
    let tabuada = valorTabuada

    entradaDeDados.question('Digite o valor do contador inicial: ', function(valorContador){
        let contador = valorContador
        
        entradaDeDados.question('Digite o valor do contador final: ', function(valorContadorFinal){
            let contadorFinal = valorContadorFinal

            //Chama a função externa que realiza o calculo da tabuada
            console.log(calculoTabuada.gerarTabuada(tabuada, contador, contadorFinal))
            
});
    });

});
