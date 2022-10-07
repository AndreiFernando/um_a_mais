//Carrosel
let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
    nextImage();
}, 5000)

function nextImage() {
    count++;
    if (count > 3) {
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;
}
//Final do carrosel

function onClickMenu() {
    document.getElementById("menu").classList.toggle("icon");
    document.getElementById("nav").classList.toggle("change");
}



function trocar(imagem, texto) {
    document.getElementById("alterar").src = imagem;
    document.getElementById("msg").innerText = texto;
}

function aoClicar(imagem, texto) {
    const caixa = document.querySelector(".menucelular");
    caixa.style.animation = "";
    trocar(imagem, texto)
    setTimeout(() => caixa.style.animation = "opacity 1s linear");    
}
