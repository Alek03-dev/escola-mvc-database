const bancoDados = require("../config/banco-dados")

async function listarTodosProfessores() {
      
    const conexao = await bancoDados.conexao
    
    //Executar a consulta de SELECT no banco de dados
    //Desestruturação do resultado da consulta
    const professores = await conexao.execute("SELECT * FROM professores")

        // Contar a quantidade de cursos retornados
    console.log('quantidade de cursos: ', professores[0].length)

    // Retornar os cursos
    return professores[0]
}

module.exports = {
    listarTodosProfessores
}