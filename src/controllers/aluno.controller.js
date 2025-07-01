function listarAlunos(request, response) {
    response.send("Função responsavel pela listagem")
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