// Importar a biblioteca do mysql2 para se conectar ao banco de dados mysql
const mysql = require('mysql2/promise');

// Configurações de conexão com o banco de dados
const conexao = mysql.createConnection({
    host: 'localhost', // Endereço do servidor
    user: "root", // Usuário do banco de dados
    password: 'root', // Senha do banco de dados
    database: 'sistema_escolar', // Nome do banco de dados
})

// Exportar a conexão para ser ustilizadaem outros arquivos(model)
module.exports = {
    conexao
}