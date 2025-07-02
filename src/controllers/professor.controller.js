// Importar o model de cursos
const professoresModel = require("../models/curso.model")

async function listarProfessores(request, response) {
    
    // Chamar a função do listarTodosProfessores do model
    const professores = await professorresModel.listarTodosProfessores()

    response.json(professores)
}

function criarProfessor(request, response) {
    response.send("Funçao responsavel por cadastrar um Professor")
}

function deletarProfessor(request, response) {
    response.send("Função responsável por deletar um Professor")
}

function atualizarProfessor(request, response) {
    response.send("Função responsável por atualizar um Professor")
}

module.exports = {
    listarProfessores,
    criarProfessor,
    deletarProfessor,
    atualizarProfessor
}