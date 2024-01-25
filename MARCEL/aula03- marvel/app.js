/****************************************************
* Objetivo: Calcular a média de um aluno
* Data: 16/08/23
* Autor: Gabrielle Bueno Ribeiro
* Versão: 1.0
*****************************************************/

var readline=require("readline")
var entradaDados=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
entradaDados.question('Digite o nome do aluno: ',function(nomeAluno){
    let nome=nomeAluno

    entradaDados.question('Digite o curso do aluno: ',function(cursoAluno){
        let curso=cursoAluno

        entradaDados.question('Digite a disciplina: ',function(disciplinaAluno){
            let disciplina=disciplinaAluno

            entradaDados.question('Digite a primeira nota do aluno: ',function(notas1){
                let nota1 =nota1Aluno.replace(',','.'); //replace() - localize um caracter e substitui p outro

                entradaDados.question('Digite a segunda nota: ',function(notas2){
                    let nota2 =nota2Aluno.replace(',','.');

                    entradaDados.question('Digite a terceira nota: ',function(notas3){
                        let nota3 =nota3Aluno.replace(',','.');

                        entradaDados.question('Digite a quarta nota: ',function(notas4){
                            let nota4 =nota4Aluno.replace(',','.');

                            if(nota1 == ''||nota2 == ''|| nota3 == ''||nota4 == ''){
                                console.log('ERRO: é obrigatorio o preenchimento de todas as notas!')
                                entradaDados.close

                                //isNaN() - permite vereficar se o conteúdo da variavel é númerica
                            }else if(isNaN(nota1)||isNaN(nota2)||isNaN(nota3)||isNaN(nota4)){
                                console.log('ERRO: é obrigatorio a entrada apenas de valores numéricos!')
                                entradaDados.close()

                                //Validação para limitar a entrada de valores entre 0 e 10
                            }else if(nota1 > 10 || nota1 < 0 || nota2 > 10 || nota2 < 0 || nota3 > 10 || nota3 < 0 || nota4 > 10 || nota4 < 0)
                            {
                                console.log('ERRO: é obrigatório apenas a entrada d valores entre 0 e 10')
                                entradaDados.close();

                            }else{

                                //parseInt() - Converte para inteiro
                                //parseFloat - converte para real
                                //Numver() - Converte para número podendo ser inteiro ou real
                                //String() - Converte para string uma variavel do tipo numérica
                                //tofixed() - permite limitar a qtde de casas decimais

                                let media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4))/4;
                            
                            console.log('BOLETIM DO ALUNO: ')
                            console.log('Nome do aluno: '+nome)
                            console.log('Curso: '+curso)
                            console.log('Disciplina: '+disciplina)
                            console.log('Nota 1: '+nota1)
                            console.log('Nota 2: '+nota2)
                            console.log('Nota 3: '+nota3)
                            console.log('Nota 4: '+nota4)
                            console.log('Média final: '+media)
                            entradaDados.close()


                            }
                        })
                    })
                })
            })
        })
    })
})
