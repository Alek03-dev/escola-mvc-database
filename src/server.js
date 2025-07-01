// Importando o módulo do express
const express = require('express')

// Importação dos controllers
const cursoController = require('./controllers/curso.controller')
const alunoController = require('./controllers/aluno.controller')
const professorController = require('./controllers/professor.controller')

// Criando uma instância do express
const app = express()

// Criar uma rota
app.get('/cursos', cursoController.listarCursos)
app.post('/criar-curso', cursoController.criarCurso)
app.put('/atualizar-curso', cursoController.atualizarCurso)
app.delete('/deletar-curso', cursoController.deletarCurso)

app.get('/alunos', alunoController.listarAlunos)
app.post('/criar-aluno', alunoController.criarAluno)
app.put('/atualizar-aluno', alunoController.atualizarAluno)
app.delete('/deletar-aluno', alunoController.deletarAluno)

app.get('/professores', professorController.listarProfessores)
app.post('/criar-professor', professorController.criarProfessor)
app.put('/atualizar-professor', professorController.atualizarProfessor)
app.delete('/deletar-professor', professorController.deletarProfessor)

// Iniciando o servidor na porta 3000
app.listen(3000, function() {
    console.log("Servidor rodando na porta 3000")
})