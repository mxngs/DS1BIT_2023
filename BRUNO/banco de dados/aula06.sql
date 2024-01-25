create schema escola_SQL;
use escola_SQL;

create table alunos(
aluno_id integer primary key,
nome varchar (50),
data_nascimento varchar(20),
endereco varchar (50),
telefone varchar (20)
);

create table professores(
professor_id integer primary key,
nome varchar (50),
data_contratacao varchar(20)
);

create table disciplinas(
disciplina_id integer primary key,
nome_disciplina varchar (50),
codigo_disciplina varchar (10),
carga_horaria varchar (10)
);

create table turmas(
turma_id integer primary key,
ano_escolar varchar (10),
disciplina_id integer,
foreign key (disciplina_id) references disciplinas(disciplina_id),
professor_id integer,
foreign key (professor_id) references professores(professor_id)
);

create table notas(
nota_id integer primary key,
aluno_id integer,
foreign key (aluno_id) references alunos(aluno_id),
disciplina_id integer,
foreign key (disciplina_id) references disciplinas(disciplina_id),
data_avaliacao varchar (20),
nota numeric
);

create table presenca(
presenca_id integer primary key,
aluno_id integer,
foreign key (aluno_id) references alunos(aluno_id),
turma_id integer,
foreign key (turma_id) references turmas(turma_id),
data_aula varchar (20),
presenca varchar (20)
);

INSERT INTO Alunos (aluno_id, nome, data_nascimento, endereco, telefone)
VALUES
 (1, 'João Silva', '1995-03-15', 'Rua A, 123', '(11) 1234-5678'),
 (2, 'Maria Santos', '1998-06-22', 'Av. B, 456', '(11) 9876-5432'),
 (3, 'Carlos Oliveira', '1997-01-10', 'Rua C, 789', '(11) 5678-1234'),
 (4, 'Ana Pereira', '1999-09-05', 'Av. D, 987', '(11) 4321-8765'),
 (5, 'Pedro Rodrigues', '1996-07-18', 'Rua E, 654', '(11) 3456-7890'),
 (6, 'Sara Costa', '2000-04-30', 'Av. F, 321', '(11) 8765-4321');
 
 INSERT INTO Professores (professor_id, nome, data_contratacao)
VALUES
 (1, 'Ana Lima', '2010-08-15'),
 (2, 'José Santos', '2005-04-20'),
 (3, 'Márcio Oliveira', '2012-11-10'),
 (4, 'Cláudia Pereira', '2014-03-25'),
 (5, 'Fernanda Rodrigues', '2018-09-08'),
 (6, 'Ricardo Costa', '2019-12-01');
 
 INSERT INTO Disciplinas (disciplina_id, nome_disciplina, codigo_disciplina, carga_horaria)
VALUES
 (1, 'Programação em C', 'PC101', 60),
 (2, 'Banco de Dados', 'BD201', 45),
 (3, 'Desenvolvimento Web', 'DW301', 75),
 (4, 'Algoritmos Avançados', 'AA401', 60),
 (5, 'Inteligência Artificial', 'IA501', 90),
 (6, 'Segurança da Informação', 'SI601', 45);
 
 INSERT INTO Turmas (turma_id, ano_escolar, disciplina_id, professor_id)
VALUES
 (101, 2023, 1, 1),
 (102, 2023, 2, 2),
 (103, 2023, 3, 3),
 (104, 2023, 4, 4),
 (105, 2023, 5, 5),
 (106, 2023, 6, 6);

INSERT INTO Notas (nota_id, aluno_id, disciplina_id, data_avaliacao, nota)
VALUES
 (1, 1, 1, '2023-03-10', 85),
 (2, 2, 1, '2023-03-10', 78),
 (3, 3, 1, '2023-03-10', 92),
 (4, 4, 2, '2023-03-15', 88),
 (5, 5, 2, '2023-03-15', 95),
 (6, 6, 2, '2023-03-15', 75);
 
 INSERT INTO Presenca (presenca_id, aluno_id, turma_id, data_aula, presenca)
VALUES
 (1, 1, 101, '2023-03-10', 'presente'),
 (2, 2, 101, '2023-03-10', 'presente'),
 (3, 3, 101, '2023-03-10', 'presente'),
 (4, 4, 102, '2023-03-15', 'ausente'),
 (5, 5, 102, '2023-03-15', 'presente'),
 (6, 6, 102, '2023-03-15', 'presente');
 
select turmas.turma.id, disciplinas.disciplina_id, professores.professor_id for turmas 
join disciplinas on turmas.disciplina_id = disciplinas.disciplina_id
join professores on turma.professor_id = professores.professor_idwhere codigo_disciplina = "BD201";



