function expandeMenu() {
    let menu = document.getElementById("nav-mobile");
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
}
