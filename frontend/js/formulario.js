function alterar_tema() {
    var body = document.body;

    if (body.classList.contains("escuro")) {
        body.classList.remove("escuro");
        body.classList.add("claro");
    }
    else {
        body.classList.remove("claro");
        body.classList.add("escuro");
    }
}

async function cadastrar_noticia(event) {
    event.preventDefault();

    var titulo = document.getElementById("titulo").value;
    var conteudo = document.getElementById("conteudo").value;
    var imagem = document.getElementById("imagem").value;
    var link = document.getElementById("link").value;

    var mensagem = document.getElementById("mensagem");

    mensagem.innerHTML = "Cadastrando notícia...";

    try {
        var resposta = await fetch("https://noticias-backend-tares.up.railway.app/noticias",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    titulo: titulo,
                    conteudo: conteudo,
                    imagem: imagem,
                    link: link
                })
            }
        );

        var resultado = await resposta.json();

        if (resultado.insertId) {
            mensagem.innerHTML = `Notícia cadastrada com sucesso! ID: ${resultado.insertId}`;

            document.querySelector("form").reset();
        }
        else {
            mensagem.innerHTML = "Erro ao cadastrar notícia.";
        }
    }
    catch (erro) {
        mensagem.innerHTML = "Erro ao conectar com o servidor.";
    }
}