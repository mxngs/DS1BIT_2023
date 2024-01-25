var calculadoraFatorial = require('./modulo/calculoFatorial.js')
var readline = require('readline')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite o número que você deseja saber o fatorial: ', function(valorNumero){
    let numero = valorNumero

    calculadoraFatorial.calcularFatorial(numero)
})