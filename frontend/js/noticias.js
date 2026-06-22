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
function exibir_noticias() {
    const container = document.getElementById("noticias");
 
    var noticias = []

    var html = "";
    noticias.push({
        imagem: "https://via.placeholder.com/300x200",
        titulo: "Notícia 1",
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.",
        link: "https://www.google.com"
    });
    var html = "";
    noticias.forEach(noticia => {
        html += `
         <article class="noticia">
                <img src="${noticia.imagem}" onclick="abrir_lightbox(this)" alt="">
                <h2>${noticia.titulo}</h2>
                <p>${noticia.descricao}</p>
                <a href="${noticia.link}">leia mais...</a>
            </article>
        `;
    });

    section.innerHTML = html;
}
 