/*******************************************************************
 * objetivo: criar um sistema que gerencie números pares e ímpares.
 * autora: Gabrielle
 * versão: 1.0
*******************************************************************/

const gerenciarNumeros = function(valorInicial, valorFinal, separacao){
    let valorI = valorInicial
    let valorF = valorFinal
    let status = false
   
    if(valorI < 0 || valorI > 500){
    console.log('Para o primeiro valot, é permitida apenas a entrada de números entre 0 e 500')
    }else if(valorF < 100 || valorF > 1000){
    console.log('Para o valor final, é permitida apenas a entrada de números entre 100 e 1000')
    }else if(valorI == '' || valorF == ''){
    console.log('ERRO: os valores precisam ser preenchidos')
    }else if(valorI === valorF){
    console.log('Os valores não podem ser os mesmos.')
    }else if(Number(valorI) > Number(valorF)){
        console.log('ERRO: o valor inicial não pode ser maior que o valor final')
    }else{
        valorI = Number(valorI)
        valorF = Number(valorF)

        if(separacao === 'pares'){
            verificarPares(valorI, valorF)
            status = true
        }else if(separacao === 'ímpares'){
            verificarImpares(valorI, valorF)
            status = true

        }else if(separacao === 'ambos'){
            verificarPares(valorI, valorF)
            verificarImpares(valorI, valorF)
            status = true
        }
        return status
}
}

const verificarPares = (numeroInicial, numeroFinal) => {
    let nI = numeroInicial
    let nF = numeroFinal
    let quantidade = 0
    console.log('Números Pares:')
    while (nI < nF){
        if (nI % 2 == 0){
            console.log(nI)
            quantidade += 1
        }
        nI++
    }
    console.log(`Quantidade de números pares: ${quantidade}`)
    return true
}
const verificarImpares = (numeroInicial, numeroFinal) => {
    let nI = numeroInicial
    let nF = numeroFinal
    let quantidade = 0
    console.log('Números Ímpares:')
    while (nI < nF){
        if (nI % 2 != 0){
            console.log(nI)
            quantidade += 1
        }
        nI++
    }
    console.log(`Quantidade de números ímpares: ${quantidade}`)
    return true
}

module.exports = {
    gerenciarNumeros
}