/*************************************************************************
* Objetivo: Calculo do IMC e informa o grau do peso
* Data: 15/09/2023
* Autor: Gabrielle Bueno
* Versão: 1.0
**************************************************************************/

var calculadora_imc=require('./modulo/calculadora_imc')
var readline=require('readline')
var entradaDados=readline.createInterface({

    input: process.stdin,
    output: process.stdout

})
entradaDados.question('Digite o seu peso em kg: ',function(pesoUsuario){
    let peso=pesoUsuario
    entradaDados.question('Digite a sua altura em cm: ',function(alturaUsuario){
        let altura=alturaUsuario
        console.log(calculadora_imc.calculadoraImc(peso,altura))
        entradaDados.close()
    })
})