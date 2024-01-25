/****************************************************
* Objetivo: Fazer uma calculadora com apenas duas
entradas de valor
* Data: 16/08/23
* Autor: Gabrielle Bueno Ribeiro
* Versão: 1.0
*****************************************************/
//Import da biblioteca para fazer os calculos
var calculosMatematicos = require('./modulo/calculosMatematicos.js')

//Import da biblioteca do read line
const { SourceMap } = require("module")
var readline=require("readline")

//Criação do objeto de entrada de dados
var entradaDados=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})


console.log('+-----------------------------------------------+')
console.log('                  CALCULADORA')
console.log('1 - Soma')
console.log('2 - Subtração')
console.log('3 - Multiplicação')
console.log('4 - Divisão')
console.log('+-----------------------------------------------+')
console.log('')

//Entrada da operação a ser calculada
entradaDados.question('Digite qual operação será feita: ',function(respostaUsuario){
    let resposta=respostaUsuario

    if(resposta==''){
        console.log('ERRO: Selecione uma operação.')
        entradaDados.close()

    }else if(resposta<1||resposta>4){
        console.log('ERRO: Selecione uma operação válida.')
        entradaDados.close()

    }else if(isNaN(resposta)){
        console.log('ERRO: Selecione a operação utilizando apenas os números.')
        entradaDados.close()
    }

    console.log('')
    
    //Entrada do valor 1
    if(resposta==1){
        entradaDados.question('Digite o primeiro valor: ',function(valor1){
            let v1=valor1.replace(',','.')

    //Entrada do valor 2
            entradaDados.question('Digite o segundo valor: ',function(valor2){
                let v2=valor2.replace(',','.')

                console.log('')
    //Valor vazio
                if(v1==''||v2==''){
                    console.log('ERRO: Você não pode deixar este valor em branco.')
                    entradaDados.close()

    //Caracter inválido
                }else if(isNaN(v1)||isNaN(v2)){
                    console.log('ERRO: Você só pode inserir números.')
                    entradaDados.close()
                }

    //Saida do resultado 
    //.replace('.',',')= conversao do ponto para virgula3
           
                let resultado=Number(v1)+Number(v2)
                console.log('O resultado da conta é: '+String(resultado).replace('.',','))
                entradaDados.close()
            })
        })
    }

    if(resposta==2){
        entradaDados.question('Digite o primeiro valor: ',function(valor1){
            let v1=valor1.replace(',','.')
            entradaDados.question('Digite o segundo valor: ',function(valor2){
                let v2=valor2.replace(',','.')

                if(v1==''||v2==''){
                    console.log('ERRO: Você não pode deixar este valor em branco.')
                    entradaDados.close()

                }else if(isNaN(v1)||isNaN(v2)){
                    console.log('ERRO: Você só pode inserir números.')
                    entradaDados.close()
                }

                let resultado=Number(v1)-Number(v2)
                console.log('O resultado da conta é: '+String(resultado).replace('.',','))
                entradaDados.close()
            })
        })
    }

    if(resposta==3){
        entradaDados.question('Digite o primeiro valor: ',function(valor1){
            let v1=valor1.replace(',','.')
            entradaDados.question('Digite o segundo valor: ',function(valor2){
                let v2=valor2.replace(',','.')

                if(v1==''||v2==''){
                    console.log('ERRO: Você não pode deixar este valor em branco.')
                    entradaDados.close()

                }else if(isNaN(v1)||isNaN(v2)){
                    console.log('ERRO: Você só pode inserir números.')
                    entradaDados.close()
                }

                let resultado=Number(v1)*Number(v2)
                console.log('O resultado da conta é: '+String(resultado).replace('.',','))
                entradaDados.close()
            })
        })
    }
    if(resposta==4){
        entradaDados.question('Digite o primeiro valor: ',function(valor1){
            let v1=valor1.replace(',','.')
            entradaDados.question('Digite o segundo valor: ',function(valor2){
                let v2=valor2.replace(',','.')

                if(v1==''||v2==''){
                    console.log('ERRO: Você não pode deixar este valor em branco.')
                    entradaDados.close()

                }else if(isNaN(v1)||isNaN(v2)){
                    console.log('ERRO: Você só pode inserir números.')
                    entradaDados.close()

                }else if(v1==0||v2==0){
                    console.log('ERRO: Não é possível dividir por 0.')
                    entradaDados.close()

                }else{
                    let resultado=Number(v1)/Number(v2)
                    console.log('O resultado da conta é: '+String(resultado).replace('.',','))
                    entradaDados.close()
                }
                resultado = calculosMatematicos.calculadora(numero1, numero2, operacao)
            })

        })
    }
    
})
