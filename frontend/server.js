import express from 'express';
import path from 'path';

const app = express();

app.use(express.static(path.resolve()));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Frontend rodando na porta ${PORT}`);
});