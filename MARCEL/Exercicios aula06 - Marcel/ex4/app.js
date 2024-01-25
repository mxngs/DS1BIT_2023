/*************************************************************************
* Objetivo: sistema que gerencie números pares e ímpares
* Data: 15/09/2023
* Autor: Gabrielle Bueno
* Versão: 1.0
**************************************************************************/
var calculo=require('./modulo/parOuImpar')
var readline=require('readline')
var entradaDados=readline.createInterface({

    input: process.stdin,
    output: process.stdout
    
})
entradaDados.question('Digite o valor inicial: ',function(valorInicialUsuario){
    valorInicial=valorInicialUsuario
    entradaDados.question('Digite o valor final: ',function(valorFinalUsuario){
        valorFinal=valorFinalUsuario
        entradaDados.question('Digite 1 para ver apenas os números pares, 2 para ver apenas os números ímpares ou 3 para ver ambos: ',function(escolhaUsuario){
            escolha=escolhaUsuario
            console.log(calculo.calcularParesOuImpares(valorInicial,valorFinal,escolha))
            entradaDados.close()
        })
    })
})