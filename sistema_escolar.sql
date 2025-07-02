use sistema_escolar;

/**
alunos: id, nome, email, ra, data_nascimento
cursos: id, nome, carga_horaria, escolaridade_requirida
professores: id, nome, salario, avaliacao, 
**/

create table alunos (
id INT AUTO_INCREMENT PRIMARY KEY,
nome varchar(255),
email varchar(255),
ra varchar(15),
data_nascimento date
);

create table cursos (
id INT AUTO_INCREMENT PRIMARY KEY,
nome varchar(255),
carga_horaria int,
escolaridade_requirida varchar(100)
);

create table professores (
id INT AUTO_INCREMENT PRIMARY KEY,
nome varchar(255),
salario numeric,
avaliacao int
);