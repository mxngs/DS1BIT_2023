/****************************************************
 * objetivo: Criar um sistema que gerencie as médias 
 * escolares de uma universidade
 * autor: Gabrielle
 * versão: 1.0
 * ****************************************************/
const readline = require('readline')
const calcularMedia = require('./modulo/mediasEscolares.js')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Nome do aluno: ', function (nomeAluno) {
    let aluno = nomeAluno
    let estudante

rl.question('Nome do professor: ', function (nomeProfessor) {
        let professor = nomeProfessor
        let educador

rl.question('Sexo do professor (M/F): ', function (sexoProfessor) {
            let sexoP = sexoProfessor.toLowerCase()

rl.question('Sexo do aluno (M/F): ', function (sexoAluno) {
                let sexoA = sexoAluno.toLowerCase()

rl.question('Nome do curso: ', function (nomeCurso) {
                    let curso = nomeCurso

 rl.question('Nome da disciplina: ', function (nomeDisciplina) {
let disciplina = nomeDisciplina

rl.question(`Nota 1 (0-100): `, function (nota1) {
let n1 = parseFloat(nota1)

rl.question(`Nota 2 (0-100): `, function (nota2) {
let n2 = parseFloat(nota2)

rl.question(`Nota 3 (0-100): `, function (nota3) {
let n3 = parseFloat(nota3)

rl.question(`Nota 4 (0-100): `, function (nota4) {
let n4 = parseFloat(nota4)

if (n1 == '' || n2 == '' || n3 == '' || n4 == '' || aluno == '' || professor == '' || sexoA == '' || sexoP == '' || curso == '' || disciplina == '') {
console.log('ERRO: é necessária a entrada de um valor')
    return
 }

else if (isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4)) {
     console.log('ERRO: é necessária a entrada de um valor numérico')
        return
   }



   if (sexoA == 'f') {
   estudante = 'aluna'

   } else {
   estudante = 'aluno'
    }

   if (sexoP == 'f') {
   educador = 'professora'

   } else {
    educador = 'professor'
    }

    let media = calcularMedia.mediaCalculo(n1, n2, n3, n4)
    let status

       if (media >= 70) {
        status = 'aprovado'
      } else if (media >= 50) {

    rl.question('Insira o valor da prova de exame: ', function (exame) {
     let exa = Number(exame)
      let mediaE = (media + exa) / 2


      if (mediaE > 60) {
     status = 'aprovado em exame'
      } else {
     status = ' reprovado no exame'
      }

console.log('\nRelatório do aluno:');
console.log(`O ${estudante} ${aluno} foi ${status} na disciplina ${disciplina}.`);
console.log(`Curso: ${curso}`);
console.log(`${educador}: ${professor}`); 
console.log(`Notas do aluno: ${n1}, ${n2}, ${n3} e ${n4}`);
console.log(`Média Final: ${media}`);
console.log(`Média do exame: ${mediaE}`)
 })
                                        
  }else if(media < 50){
   status = 'reprovado'
     }
     
  console.log('\nRelatório do aluno:');
  console.log(`${estudante} ${aluno} foi ${status} na disciplina ${disciplina}.`);
  console.log(`Curso: ${curso}`);
  console.log(`${educador}: ${professor}`);
  console.log(`Notas do aluno: ${n1}, ${n2}, ${n3} e ${n4}`);
  console.log(`Média Final: ${media}`);
          });
                                });
                            });
                        });
                    })
                })
            })
        })
    })
})
