import readline from 'express';
import cors from 'cors';
import { executarQuery } from './db.js';

const app = express();
app.use(cors());
app.use(express.json());

function input(pergunta) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question(pergunta, resposta => {
            rl.close();
            resolve(parseInt(resposta));
        });
    });
}

app.post('/noticias', async (req, res) => {

    var body = req.body;
    var query = `
        INSERT INTO noticias (
            titulo,
            conteudo,
            caminhoImagem,
            link
        ) VALUES (
            ?,
            ?,
            ?,
            ?
        )
    `;

    var noticia = [
        req.body.titulo,
        req.body.conteudo,
        req.body.caminhoImagem,
        req.body.link
    ];

    let resultado = await executarQuery(query, noticia);
})


export default input