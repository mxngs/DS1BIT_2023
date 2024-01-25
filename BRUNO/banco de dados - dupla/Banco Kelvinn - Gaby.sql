create schema cursos_adicionais_SQL;

use cursos_adicionais_SQL;

/*Criação das tabelas */

create table cursos(
	curso_id integer primary key,
    nome_curso varchar(50),
    carga_horaria varchar(17),
    quantidade_max_alunos numeric
);

create table alunos (
	aluno_id integer primary key,
    nome varchar (50),
    data_nascimento varchar (15),
    telefone varchar (20),
    email varchar (70)
);

create table professores(
	professor_id integer primary key,
    nome varchar (50),
    data_contracao varchar (15),
    email varchar (70)
);

create table turmas(
	turma_id integer primary key,
    sala varchar (10),
    curso_id integer,
    foreign key (curso_id) references cursos(curso_id),
    professor_id integer,
    foreign key (professor_id) references professores(professor_id)
    );
    
create table presenca(	
	presenca_id integer primary key,
    aluno_id integer,
    foreign key (aluno_id) references alunos(aluno_id),
    turma_id integer,
    foreign key (turma_id) references turmas(turma_id),
    data_aula varchar (20),
    presenca varchar (10)
);

create table notas(
	nota_id integer primary key,
	aluno_id integer,
    foreign key (aluno_id) references alunos(aluno_id),
	curso_id integer,
    foreign key (curso_id) references cursos(curso_id),
    data_avaliacao varchar(50),
    nota numeric
);

/*Tabela onde indica quais seram os cursos adicionais, sua carga horaria,
 e quantidade max de alunos que pode ter em cada curso*/
insert into cursos(curso_id, nome_curso, carga_horaria, quantidade_max_alunos) values
(1,  "excel", "8 horas semanais", 20),
(2, "informatica", "8 horas semanais", 15),
(3, "robotica", "8 horas semanais", 15);

select * from cursos;

/*Tabela onde indica as informações basicas dos alunos dos cursos adicionas*/
insert into alunos(aluno_id, nome, data_nascimento, telefone,email) values
(1, "Gabrielle Bueno Ribeiro", "22/04/2007", "11 94947-9082", "gabueno43@gmail.com"),
(2, "Kelvinn Camargo Felix", "26/09/2006", "11 95520-1445", "kelvinncamargofelix@gmail.com"),
(3, "Murilo Carolino dos Santos", "15/05/2007", "11 95885-4342", "mucarolino@gmail.com"),
(4, "Carlos Eduardo da Silva Filho ", "20/07/2006","11 95104-5462", "ce04435@gmail.com"),
(5, "Pietra Paula Volpato ", "18/07;2007", "11 91688-1652", "pietrapaula@gmail.com"),
(6, "Luis Henrique Medeiros Becker", "16/07/2006", "11 94684-7330", "luismedeirosbecker2@gmail.com"),
(7, "Maria Clara Furtado Almeida", "14/09/2006", "11 99656-6057", "Clarafurtado@gmail.com"),
(8, "Julia Pereira Silva", "26/12/2006", "11 94601-2666", "juliapererapera@gmail.com"),
(9, "Gustavo Campos", "03/08/2006", "11  93005-0786", "gustavok04@gmail.com"),
(10, "Nicholas Souza Colmenero", "05/08/2006", "11  96130-2868", "JakeGamer@gmail.com"),
(11, "Sara Teixeira da Silva", "04/11/2006", "11  95422-4140", "Saradeeletro@gmail.com"),
(12, "Gustavo Henrique de Lima Santos", "19/09/2006", "11  98809-9363", "Buchechinhadagalera@gmail.com"),
(13, "Julia Mendes Rodrigues", "16/05/2007", "11  95138-9566", "jumendesdasilva@gmail.com"),
(14, "Melissa Miranda", "10/08/2005", "11  40002-8922", "patinhas123@gmail.com"),
(15, "Mohamed Salah", "15/06/2000", "11  98840-3223", "Mosalahliverpool@gmail.com");

select * from alunos;

/*Tabela onde indica os professores, sua data de contratacao e seu email pra contato*/
insert into professores(professor_id, nome, data_contracao, email) values
(1,  "Bruno Gomes", "01/02/2013", "GomesBruninho@gmail.com"),
(2, "Fernando Leonid", "01/02/2017", "Leonid@gmail.com"),
(3, "Wendel Almeida", "01/02/2015", "wendel22@gmail.com");

select * from professores;

/*Tabela onde indica a sala, turma e o professor de cada curso*/
insert into turmas(turma_id, sala, curso_id, professor_id) values 
(4, "EXL13", 1, 3),
(5, "INF26", 2, 2),
(6, "RBC77", 3, 1);

select * from turmas;

/*Tabela onde mostra se o aluno esteve presente em um determinado dia*/
insert into presenca (presenca_id, aluno_id, turma_id, data_aula, presenca) values
(1,1,6, "20/05/2023", "presente"),
(2,2,6, "20/05/2023", "presente"),
(3,3,6, "20/05/2023", "ausente"),
(4,4,6, "20/05/2023", "presente"),
(5,5,6, "20/05/2023", "presente"),
(6,6,5, "20/05/2023", "ausente"),
(7,7,5, "20/05/2023", "presente"),
(8,8,5, "20/05/2023", "ausente"),
(9,9,5, "20/05/2023", "presente"),
(10,10,5, "20/05/2023", "ausente"),
(11,11,4, "20/05/2023", "presente"),
(12,12,4, "20/05/2023", "presente"),
(13,13,4, "20/05/2023", "presente"),
(14,14,4, "20/05/2023", "ausente"),
(15,15,4, "20/05/2023", "presente");

select * from presenca;

/*Tabela onde mostra as notas dos alunos, seu curso, e  data da sua avaliação*/
insert into notas(nota_id, aluno_id, curso_id, data_avaliacao, nota) values
(1,1,3, "22/05/2023", 7),
(2,2,3, "22/05/2023", 9),
(3,3,3, "22/05/2023", 5),
(4,4,3, "22/05/2023", 10),
(5,5,3, "22/05/2023", 8),
(6,6,2, "29/05/2023", 9),
(7,7,2, "29/05/2023", 5),
(8,8,2, "29/05/2023", 3),
(9,9,2, "29/05/2023", 6),
(10,10,2, "29/05/2023", 9),
(11,11,1, "31/05/2023", 8),
(12,12,1, "31/05/2023", 10),
(13,13,1, "31/05/2023", 7),
(14,14,1, "31/05/2023", 7),
(15,15,1, "31/05/2023", 8);

select * from notas;

/*Selecionar professor que não da aula pra nenhum curso adicional*/
select professores.nome, turmas.turma_id 
from turmas
join professores 
on turmas.professor_id = professores.professor_id
where turma_id = null;

/*Curso onde a quantidade max de alunos é maior que 15 */
select * from cursos where quantidade_max_alunos > 15;

/*Selecionar os alunos ausentes na primeira aula*/
select alunos.nome, presenca.data_aula
from presenca
join alunos 
on presenca.aluno_id = alunos.aluno_id
where presenca = 'ausente';

/*Alunos que tiveram a nota menor que 7*/
select alunos.nome, notas.nota
from notas
join alunos
on notas.aluno_id = alunos.aluno_id
where nota < 7;

