/*************************************************************************
* Objetivo: Calcular o Fatorial de um número fornecido pelo usuário
* Data: 15/09/2023
* Autor: Gabrielle Bueno
* Versão: 1.0
**************************************************************************/
const calcularFatorial=function(valorFatorial){

    let fatorial=valorFatorial
    let resultado=fatorial

    if(fatorial==0)
        console.log('ERRO: Não existe fatorial de 0.') 
    else if(fatorial==1)
        console.log('ERRO: O valor precisa ser maior que 1.')
    else if(isNaN(fatorial))
        console.log('ERRO: É obrigatório a entrada apenas de valores numéricos.')
    else if(fatorial=='')
        console.log('ERRO: É obrigatório a digitação do valoor.')
    else{
        for(let contador=1;contador<fatorial;contador++)
            resultado=resultado*contador
    }
    
    let print='RESULTADO: '+resultado
    return print
}
module.exports={calcularFatorial}