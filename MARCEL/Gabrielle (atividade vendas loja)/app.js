//Import da biblioteca do read line
var precessoDeVendas = require('./precessoDeVendas')
var readline=require("readline")

//Criação do objeto de entrada de dados
var entradaDados=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
console.log('+--------------------------------------------------------+')
console.log('                      FINALIZE SUA COMPRA')
console.log('')

//Entrada do valor da venda
entradaDados.question('Insira o valor da compra: ', function(valor1){
    let numero1 = valor1.replace(',','.');


console.log('')
console.log('+--------------------------------------------------------+')
console.log('                   FORMAS DE PAGAMENTO')
console.log('                (códigos e suas condições)')
console.log('')
console.log('1 - À vista, com 8% de desconto')
console.log('2 - À vista no cartão, 4% de desconto')
console.log('3 - Em 2x, preço normal sem juros')
console.log('4 - Em 4x, preço acrescido de 8%')
console.log('')
console.log('+---------------------------------------------------------+')
console.log('')

entradaDados.question('Insira seu código: ', function (respostaUsuario){
    let resposta=respostaUsuario
    let valorFinal

    if(resposta==''){
        console.log('')
        console.log('Selecione um código.')
        entradaDados.close()

    }else if(resposta<1||resposta>4){
        console.log('')
        console.log('Selecione uma opção válida.')
        entradaDados.close()
    }

    else{
    numero1= Number(numero1)
        valorFinal= precessoDeVendas.calculos(valor1, resposta)
        if(valorFinal)
         console.log('')
        console.log('O valor da sua compra será: ' + valorFinal)
    }

    console.log('')
    console.log('+---------------------------------------------------------+')
    
})

})
