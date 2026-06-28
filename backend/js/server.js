import express from 'express';
import cors from 'cors';
import db from './db.js'; 

const app = express();

app.use(cors()); 
app.use(express.json()); 

app.post('/noticias', async (req, res) => {
    try {
        const { titulo, conteudo, imagem, link } = req.body;

        const sql = 'INSERT INTO noticias (titulo, conteudo, caminhoImagem, link) VALUES (?, ?, ?, ?)';

        const resultado = await db.executarQuery(sql, [titulo, conteudo, imagem, link]);

        const idInserido = resultado[0].insertId;

        res.status(201).json({ insertId: idInserido });

    } catch (erro) {
        console.error("Erro na rota /noticias:", erro);
        res.status(500).json({ erro: "Erro ao salvar no banco de dados." });
    }
});

app.get('/noticias', async (req, res) => {
    try {
        const sql = 'SELECT * FROM noticias';
        const resultado = await db.executarQuery(sql);
        res.status(200).json(resultado[0]);
    } catch (erro) {
        res.status(500).json({ erro: "Erro ao buscar notícias" });
    }
});

const PORT = process.env.PORT || 44104;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor rodando na porta ${PORT} para a internet!`);
});