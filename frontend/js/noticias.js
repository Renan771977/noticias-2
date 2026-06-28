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

function mudar_titulo(element) {
    element.innerHTML = "Portal Web";
}

function alterar_tema () {
    var body = document.body;
 
    if (body.classList.contains("escuro")) {
        body.classList.remove("escuro");
        body.classList.add("claro");
 
    }
    else{
        body.classList.remove("claro");
        body.classList.add("escuro");
    }
}
function abrir_lightbox(element){
    var lightbox = document.getElementById("lightbox");
    var lightbox_img = document.getElementById("lightbox-img");
 
    lightbox_img.src = element.src;
    lightbox.style.display = "flex";
}
 
function fechar_lightbox(){
    document.getElementById("lightbox").style.display = "none";
 
}
async function exibir_noticias() {
    const section = document.querySelector(".noticias");
    
    section.innerHTML = "<p style='text-align: center; width: 100%;'>Carregando notícias...</p>"; 

    try {
        const resposta = await fetch("https://noticias-2-production.up.railway.app/noticias");
        const noticias = await resposta.json();

        var html = "";
        
        noticias.forEach(noticia => {
            html += `
             <article class="noticia">
                    <img src="${noticia.caminhoImagem}" onclick="abrir_lightbox(this)" alt="">
                    <h2>${noticia.titulo}</h2>
                    <p>${noticia.conteudo}</p>
                    <a href="${noticia.link}">leia mais...</a>
                </article>
            `;
        });

        html += `
            <div class="ligthbox" id="lightbox" onclick="fechar_lightbox()"></div>
            <span class="fechar" onclick="fechar_lightbox()">&times;</span>
            <img src="" alt="" class="ligthbox-img" id="lightbox-img">
        `;

        section.innerHTML = html;
        
    } catch (erro) {
        console.error("Erro ao buscar notícias:", erro);
        section.innerHTML = "<p style='text-align: center; width: 100%;'>Erro ao carregar as notícias.</p>";
    }
}

exibir_noticias();