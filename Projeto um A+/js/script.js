//Carrosel
let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
    nextImage();
}, 3000)

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

function trocar1() {

    document.getElementById("alterar").src = "./img/Celularlogo.png"
    document.getElementById("msg").innerText = "crie sua conta"
}

function trocar2() {

    document.getElementById("alterar").src = "./img/Celularmapa.png"
    document.getElementById("msg").innerText = "Procure no mapa um hemocentro próximo de você!"
}


function trocar3() {

    document.getElementById("alterar").src = "./img/Celulardoe.png"
    document.getElementById("msg").innerText = "Faça um ato de amor, doe!"
}

function trocar4() {

    document.getElementById("alterar").src = "./img/CelularQRcode1.png"
    document.getElementById("msg").innerText = "Leia o QrCode no aplicativo"
}

function trocar5() {

    document.getElementById("alterar").src = "./img/Celularacumule.png"
    document.getElementById("msg").innerText = "Acumule pontos"
}

function trocar6() {

    document.getElementById("alterar").src = "./img/Celulartroque.png"
    document.getElementById("msg").innerText = "Troque seus pontos!"
}