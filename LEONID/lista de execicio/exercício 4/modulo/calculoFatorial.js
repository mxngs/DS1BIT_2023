/****************************************************************
 * objetivo: fazer o cálculo do fatorial de um número.
 * autor: Gabrielle
 * versão: 1.0
 *************************************************************/

const calcularFatorial = function(valorNumero){
    let numero = valorNumero
    let fatorial = 1

    if(numero == '')
    console.log('ERRO: é necessário a entrada de um valor')
    else if(isNaN(numero))
    console.log('ERRO: é necessário a entrada de um valor numérico')
    else if(numero == 0)
    console.log('Não existe fatorial de zero.')
    else if(numero == 1)
    console.log('Não é possível calcular o fatorial de um, é necessário um número novo')
    else{
        while(numero > 1){
            fatorial = fatorial * numero

            numero --
        }
        console.log(fatorial)
        return fatorial
    }
}

module.exports = {
    calcularFatorial
}