// Importar o model de cursos
const cursoModel = require("../models/curso.model")

async function listarCursos(request, response) {  
    // Chamar a função do listarTodoscursos do model
    const cursos = await cursoModel.listarTodosCursos()
    
    
    response.json(cursos)
}

function criarCurso(request, response) {
    response.send("Funçao responsavel por cadastrar um curso")
}

function deletarCurso(request, response) {
    response.send("Função responsável por deletar um curso")
}

function atualizarCurso(request, response) {
    response.send("Função responsável por atualizar um curso")
}

module.exports = {
    listarCursos,
    criarCurso,
    deletarCurso,
    atualizarCurso
}