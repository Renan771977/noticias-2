import mysql from "mysql2/promise";

async function conectar() {
    const conexao = await mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: '',
        database: "noticiario"
    });
    return conexao;
}

async function executarQuery(sql, params= []) {
    const conexao = await conectar();

    try {
        const resultado = await conexao.execute(sql, params);
        return resultado;
    } catch (error) {
        console.log('Erro ao executar a query: ${error.message}');
        throw error;
    } finally {
        await conexao.end();
    }

export default { executarQuery };}