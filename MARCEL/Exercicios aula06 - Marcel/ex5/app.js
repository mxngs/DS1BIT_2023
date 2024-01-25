/*************************************************************************
* Objetivo: Calcular o Fatorial de um número fornecido pelo usuário
* Data: 15/09/2023
* Autor: Gabrielle Bueno
* Versão: 1.0
**************************************************************************/
var calculoFatorial=require('./modulo/fatorial')
var readline=require('readline')
var entradaDados=readline.createInterface({

    input: process.stdin,
    output: process.stdout

})

entradaDados.question('Digite o valor: ',function(fatorialUsuario){
    fatorial=fatorialUsuario
    console.log(calculoFatorial.calcularFatorial(fatorial))
    entradaDados.close()
})