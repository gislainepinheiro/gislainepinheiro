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
