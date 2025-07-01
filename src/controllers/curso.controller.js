function listarCursos(request, response) {
    response.send("Função responsavel pela listagem")
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