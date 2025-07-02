// Importar o model de cursos
const alunoModel = require("../models/curso.model")

async function listarAlunos(request, response) {
    
    // Chamar a função do listarTodosAlunos do model
    const alunos = await alunoModel.listarTodosAlunos()

    response.json(alunos)
}

function criarAluno(request, response) {
    response.send("Funçao responsavel por cadastrar um aluno")
}

function deletarAluno(request, response) {
    response.send("Função responsável por deletar um aluno")
}

function atualizarAluno(request, response) {
    response.send("Função responsável por atualizar um aluno")
}

module.exports = {
    listarAlunos,
    criarAluno,
    deletarAluno,
    atualizarAluno
}