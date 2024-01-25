/********************************************************************
 * objetivo: Fazer a tabuadas dos números escolhidos pelo usuário 
 * autor: Gabrielle
 * versão: 1.0
 *******************************************************************/
const tabuadas = require('./modulo/calculoTabuadas')
const readline = require('readline')

const entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite o valor da primeira tabuada: ', function(valorTabuI){
    let tabuadaI = valorTabuI
    entradaDados.question('Digite o valor da última tabuada: ', function(valorTabuF){
        let tabuadaF = valorTabuF
        entradaDados.question('Digite o valor do primeiro valor: ', function(valorContadorI){
            let contadorI = valorContadorI
            entradaDados.question('Digite o valor da primeira tabuada: ', function(valorContadorF){
                let contadorF = valorContadorF

                tabuadas.gerarTabuadas(tabuadaI, tabuadaF, contadorI, contadorF)
            })
        })
    })
})