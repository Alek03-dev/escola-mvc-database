const bancoDados = require("../config/banco-dados")

async function listarTodosAlunos() {
      
    const conexao = await bancoDados.conexao
    
    //Executar a consulta de SELECT no banco de dados
    //Desestruturação do resultado da consulta
    const alunos = await conexao.execute("SELECT * FROM alunos")

    // Contar a quantidade de cursos retornados
    console.log('quantidade de cursos: ', alunos[0].length)

    // Retornar os cursos
    return alunos[0]
}

module.exports = {
    listarTodosAlunos
}