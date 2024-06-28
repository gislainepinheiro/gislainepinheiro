window.onload = inicio;

function inicio() {
    let hamburger = document.getElementsByClassName('hamburger-menu')[0];
    hamburger.onclick = expandeMenu;
    let botoes = document.getElementById('botoes').children;
    
    if (botoes.length > 0) {
        botoes[0].style.color = "#222";
        for (let i = 0; i < botoes.length; i++) {
            botoes[i].onclick = function() {
                mostrarServico(botoes[i].id.slice(6));
            };
        }
    }
}

/* A função abaixo é responsável pela seleção dos serviços na página /servicos. Apenas nas telas maiores. */

function mostrarServico(id) {
    let botoes = document.getElementById('botoes').children;
    let conteudos = document.getElementsByClassName('conteudo');
    for (let i = 0; i < botoes.length; i++) {
        if (botoes[i].id === `botao-${id}`) {
            botoes[i].classList.add("ativo");
            botoes[i].style.color = "#222";
        } else {
            botoes[i].classList.remove("ativo");
            botoes[i].style.color = "#fff";
        }
        console.log(conteudos[i].id); console.log(id);
        if (conteudos[i].id === id) {
            conteudos[i].classList.add("ativo");
            conteudos[i].classList.remove("inativo");
        } else {
            conteudos[i].classList.remove("ativo");
            conteudos[i].classList.add("inativo");
        }
    }
}


/* A função abaixo é acionada quando o usuário toca no botão do menu nos dispositivos móveis.
É o que faz aparecer e desaparecer a cada toque */

function expandeMenu() {
    let menu = document.getElementById("nav-mobile");
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
}
