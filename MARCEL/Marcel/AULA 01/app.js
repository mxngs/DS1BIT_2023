//comentario em linha

/*
    Cometario em bloco

*/    

console.log('AULA 01 - Node.JS')

//Import da biblioteca readline, que permite interação de entrada de dados com o usuario
var readline = require('readline')

//Criando um objeto chamado na entradaDados com a unstancia de readline
var entradaDados = readline.createInterface({
   input:process.stdin,
   output: process.stdout
 })
 

 //Exibe uma mensagem no terminal solicitando a emtrada de dados pelo o usuario
 //Obs: o metdo question envia o texto para o terminal e aguardar adigitaçao
   //o retorno do que o usuario digita chega internamente pela variavel (nomeUsuario)

   //Entrada de dados "nomes"
 entradaDados.question('Digite seu nome: ' , function(nomeUsuario){

    var nome = nomeUsuario

  //Entrada de dados "sobrenome"
  entradaDados.question('Digite seu sobrenome: ' , function(sobrenomeUsuario){

    var sobrenome = sobrenomeUsuario

    //Exibe as variaveis nome e sobrenome juntas(concatenadas)
    console.log('o nome do usuario é: ' + nome + ' ' + sobrenome)
   
 })


 
 //console.log(typeof(nome))
//typeof() - permite indentificar o tipo de dados de uma variavel ou objeto
//console.log(typeof(nome))

//Concataneção é representado pelo sinal de 

 })