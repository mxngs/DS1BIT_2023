/****************************************************
 * objetivo: Fazer uma calculadora de IMC 
 * autor: Gabrielle
 * versão: 1.0
 * ****************************************************/

const gerarImc = function(valorPeso, valorAltura){
    let peso = valorPeso
    let altura = valorAltura

    let resultado
    let status = false

    if(peso == '' || altura == '')
    console.log('ERRO: é necessário a entrada de todos os dados.')
    else if(isNaN(peso) || isNaN(altura))
    console.log('ERRO: é necessário que os valores sejam apenas numéricos.')
    else{
        peso = Number(peso)
        altura = Number(altura)

        resultado = peso / (altura * altura)
        status = true
        if(resultado < 18.5){
            console.log(`Seu IMC é ${resultado}! Você está abaixo do peso.`)
            status = true
        }else if(resultado > 18.5 && resultado < 24.9){
            console.log(`Seu IMC é ${resultado}! Você está no peso ideal para sua altura .`)
            status = true
        }else if(resultado > 25 && resultado < 29.9){
            console.log(`Seu IMC é ${resultado}! Você está acima do peso.`) 
            status = true
        }else if(resultado > 30 && resultado < 34.9){
            console.log(`Seu IMC é ${resultado}! Você está em caso de obesidade nível I`)
            status = true
        }else if(resultado > 35 && resultado < 39.9){
            console.log(`Seu IMC é ${resultado}! Você está em caso de obesidade nível II`)
            status = true
        }else{
            console.log(`Seu IMC é ${resultado}! Você está em caso de obesidade nível III`)
            status = true
        }
        console.log(status)
    }
    return status
}

module.exports = {
    gerarImc
}