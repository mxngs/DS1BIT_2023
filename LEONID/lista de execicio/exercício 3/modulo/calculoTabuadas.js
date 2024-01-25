/********************************************************************
 * objetivo: Fazer a tabuadas dos números escolhidos pelo usuário 
 * autor: Gabrielle
 * versão: 1.0
 *******************************************************************/

const gerarTabuadas = function(valorTabuI, valorTabuF, valorContadorI, valorContadorF){
    let tabuadaI = valorTabuI
    let tabuadaF = valorTabuF
    let contadorI = valorContadorI
    let contadorF = valorContadorF
    let status = false

    if(tabuadaI == '' || tabuadaF == '' || contadorI == '' || contadorF == '')
    console.log('ERRO: todos os campos precisam ser preenchidos!')
    else if(tabuadaI < 2 || tabuadaF > 100)
    console.log('Serão aceitas tabuadas apenas entre 2 e 100.')
    else if(contadorI < 1 || contadorF > 50)
    console.log('Serão permitidas as tabuadas apenas de valores entre 1 e 50.')

    for(let tabuada = tabuadaI; tabuada <= tabuadaF; tabuada++){
        console.log(`Tabuada do ${tabuadaI}`)

        for(let contador = contadorI; contador <= contadorF; contador++){
            tabuadaI = Number(tabuadaI)

            let resultado = tabuadaI * contador

            console.log(`${tabuadaI} x ${contador} = ${resultado}`)
        }
        tabuadaI = tabuadaI + 1
        status = true
    }
    return status
}

module.exports = {
    gerarTabuadas
}