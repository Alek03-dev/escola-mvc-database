const bancoDados = require("../config/banco-dados")

async function listarTodosCursos() {
      
    const conexao = await bancoDados.conexao
    
    //Executar a consulta de SELECT no banco de dados
    //Desestruturação do resultado da consulta
    const cursos  = await conexao.execute("SELECT * FROM cursos")

    // Contar a quantidade de cursos retornados
    console.log('quantidade de cursos: ', cursos[0].length)

    // Retornar os cursos
    return cursos[0]
}

module.exports = {
    listarTodosCursos
}