function listarProfessores(request, response) {
    response.send("Função responsavel pela listagem")
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