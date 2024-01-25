/*************************************************************************
* Objetivo: sistema que gerencie as médias escolares de uma universidade
* Data: 15/09/2023
* Autor: Gabrielle Bueno
* Versão: 1.0
**************************************************************************/
const calcularMedia=function(valorN1,valorN2,valorN3,valorN4){

  let nota1=valorN1
  let nota2=valorN2
  let nota3=valorN3
  let nota4=valorN4

  let status

  if(nota1==''||nota2==''||nota3==''||nota4=='')
      console.log('ERRO: É obrigatório a digitação de todos os valores.')
  else if(isNaN(nota1)||isNaN(nota2)|| isNaN(nota3)||isNaN (nota4))
      console.log('ERRO: É obrigatório somente a digitação de valores numéricos.')
  else if(nota1<0||nota1>100||nota2<0||nota2>100||nota3<0||nota3>100||nota4<0||nota4>100)
      console.log('ERRO: Os valores devem estar entre 0 e 100.')
  else{
      media=(Number(nota1)+Number(nota2)+Number(nota3)+Number(nota4))/4
      console.log('MÉDIA: '+`${media.toFixed(2)}`)
  }
  if(media>70)
      return status='APROVADO'
  else if(media<50){
      return status='REPROVADO'
  }
  else if(media>=50&&media<=69){
      console.log('ALUNO DO TESTE')
      calcularMediasTeste(media)
  }
}

module.exports = {calcularMedia,calcularMediasTeste}