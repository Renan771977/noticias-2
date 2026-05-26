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
 
    var noticias = [
        {
            imagem: "../img/pinguin.png",
            titulo: "Estratégias em um Novo Paradigma Globalizado",
            descricao:"O empenho em analisar a hegemonia do ambiente político garante a contribuição de um grupo importante na determinação das condições estruturais subjacentes. Do ponto de vista estrutural, o comprometimento entre as equipes ressalta a relevância da participação ativa do fluxo de informações. No entanto, não podemos esquecer que a    mobilidade dos capitais internacionais prepara-nos para enfrentar situações atípicas decorrentes do sistema de formação de quadros que corresponde às necessidades. De acordo com especialistas, a consulta aos diversos militantes ressignifica os padrões de intervenção pública da gestão inovadora da qual fazemos parte.",
            link:"../html/noticia.html"
        },
        {
            imagem: "../img/beija-flor.png",
            titulo: "Estratégias em um Novo Paradigma Globalizado",
            descricao:"Caros amigos, o consenso sobre a necessidade de qualificação promove a alavancagem das diversas correntes de pensamento. No mundo atual, a reformulação das abordagens metodológicas estende o alcance e a importância do sistema de formação de quadros que corresponde às necessidades. A certificação de metodologias que nos auxiliam a lidar com a consolidação das estruturas eleva o grau de responsabilidade compartilhada do remanejamento dos quadros funcionais. A nível organizacional, a expansão dos mercados mundiais requer um olhar atento sobre os desdobramentos da gestão inovadora da qual fazemos parte. Com respaldo nas evidências disponíveis, o entendimento das metas propostas facilita a criação dos princípios que regem a boa governança.",
            link:"../html/noticia.html"
        },
        {
            imagem: "../img/pinguin.png",
            titulo: "Estratégias em um Novo Paradigma Globalizado",
            descricao:"O empenho em analisar a hegemonia do ambiente político garante a contribuição de um grupo importante na determinação das condições estruturais subjacentes. Do ponto de vista estrutural, o comprometimento entre as equipes ressalta a relevância da participação ativa do fluxo de informações. No entanto, não podemos esquecer que a    mobilidade dos capitais internacionais prepara-nos para enfrentar situações atípicas decorrentes do sistema de formação de quadros que corresponde às necessidades. De acordo com especialistas, a consulta aos diversos militantes ressignifica os padrões de intervenção pública da gestão inovadora da qual fazemos parte.",
            link:"../html/noticia.html"
        },
        {
            imagem: "../img/pinguin.png",
            titulo: "Estratégias em um Novo Paradigma Globalizado",
            descricao:"O empenho em analisar a hegemonia do ambiente político garante a contribuição de um grupo importante na determinação das condições estruturais subjacentes. Do ponto de vista estrutural, o comprometimento entre as equipes ressalta a relevância da participação ativa do fluxo de informações. No entanto, não podemos esquecer que a    mobilidade dos capitais internacionais prepara-nos para enfrentar situações atípicas decorrentes do sistema de formação de quadros que corresponde às necessidades. De acordo com especialistas, a consulta aos diversos militantes ressignifica os padrões de intervenção pública da gestão inovadora da qual fazemos parte.",
            link:"../html/noticia.html"
        }
    ];
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
 