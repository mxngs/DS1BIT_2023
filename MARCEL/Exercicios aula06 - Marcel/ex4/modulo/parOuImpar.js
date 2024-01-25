/*************************************************************************
* Objetivo: sistema que gerencie números pares e ímpares
* Data: 15/09/2023
* Autor: Gabrielle Bueno
* Versão: 1.0
**************************************************************************/
const calcularParesOuImpares=function(inicial,final,valorEscolha){

    let valorInicial=inicial
    let valorFinal=final
    let escolha=valorEscolha

    valorFinal=Number(valorFinal)
    valorInicial=Number(valorInicial)

    let numerosPares=[]
    let numerosImpares=[]
    let contador=0

    if(valorFinal==''||valorInicial=='')
        console.log('ERRO: É obrigatório a digitação de todos os valores.')
    else if(isNaN(valorFinal)||isNaN(valorInicial))
        console.log('ERRO: É obrigatório somente a digitação de valores numéricos.')
    else if(valorInicial<0||valorInicial>500)
        console.log('ERRO: O valor inicial deve estar entre 0 e 500.')
    else if(valorFinal<100||valorFinal>1000)
        console.log('ERRO: O valor final deve estar entre 100 e 1000.')
    else if(valorInicial===valorFinal)
        console.log('ERRO: Os valores não podem ser iguais.')
    else if(valorInicial>valorFinal)
        console.log('ERRO: O valor inicial não pode ser maior do que o valor final.')
    else{
        if(escolha==1){
            console.log('\nNÚMEROS PARES: ')
            for(let p=valorInicial;p<=valorFinal;p++){
            if(p%2==0){
                numerosPares[contador]=p
                console.log(numerosPares[contador])
            }
            contador++
            }
            return `Quantidade de números pares: ${numerosPares.length}`
        }
        else if(escolha==2){
            contador=0
            console.log('\nNÚMEROS ÍMPARES: ')
            for(let p=valorInicial;p<=valorFinal;p++){
            if(p%2!=0){
                numerosImpares[contador]=p
                console.log(numerosImpares[contador])
            }
            contador++
            }
            return `Quantidade de números ímpares: ${numerosImpares.length}`
        }
        else if(escolha==3){
            console.log('\nNÚMEROS PARES: ')
            for(let p=valorInicial;p<=valorFinal;p++){
            if(p%2==0){
                numerosPares[contador]=p
                console.log(numerosPares[contador])
            }
            contador++
            }
            contador=0
            console.log('\nNÚMEROS ÍMPARES: ')
            for(let p=valorInicial;p<=valorFinal;p++){
            if(p%2!=0){
                numerosImpares[contador]=p
                console.log(numerosImpares[contador])
            }
            contador++
            }
            console.log(`Quantidade de números pares: ${numerosPares.length}`)
            return `Quantidade de números ímpares: ${numerosImpares.length}`
        }
        else
            return 'ERRO: Você deve escolher entre 1, 2 ou 3.'
    }
}
module.exports={calcularParesOuImpares}