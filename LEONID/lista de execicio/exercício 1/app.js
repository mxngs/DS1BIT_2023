/****************************************************
 * objetivo: Fazer uma calculadora de IMC 
 * autor: Gabrielle
 * versão: 1.0
 * ****************************************************/
var calculadoraImc = require('./modulo/calculoImc')
var readline = require('readline')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Insira seu peso: ', function(valorPeso){
    let peso = valorPeso

    entradaDados.question('Digite sua altura em metros: ', function(valorAltura){
        let altura = valorAltura

        calculadoraImc.gerarImc(peso, altura)

    })
})