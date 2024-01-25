/*******************************************************************
 * objetivo: criar um sistema que gerencie números pares e ímpares.
 * autora: Gabrielle
 * versão: 1.0
*******************************************************************/

const gerenciarN = require('./modulo/gerenciar')
const readline = require('readline')

const entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


entradaDados.question('Digite o primeiro valor: ', function(valorInicial){
    let inicial = valorInicial


    entradaDados.question('Digite o valor final: ', function(valorFinal){
        let final = valorFinal


        entradaDados.question('Você deseja ver os pares, os ímpares ou ambos? ', function(escolha){
            let separacao = escolha


            gerenciarN.gerenciarNumeros(inicial, final, separacao)
        })
    })
})

