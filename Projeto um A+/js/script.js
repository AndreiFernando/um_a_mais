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

    document.getElementById("alterar").src = "./img/cellog.png"
    document.getElementById("msg").innerText = "crie sua conta"
}

function trocar2() {

    document.getElementById("alterar").src = "./img/celhemocentro.png"
    document.getElementById("msg").innerText = "Procure no mapa um hemocentro próximo de você!"
}


function trocar3() {

    document.getElementById("alterar").src = "./img/celhemocentro.png"
    document.getElementById("msg").innerText = "Procure no mapa um hemocentro próximo de você!"
}

function trocar4() {

    document.getElementById("alterar").src = "./img/celhemocentro.png"
    document.getElementById("msg").innerText = "Procure no mapa um hemocentro próximo de você!"
}

function trocar5() {

    document.getElementById("alterar").src = "./img/celhemocentro.png"
    document.getElementById("msg").innerText = "Procure no mapa um hemocentro próximo de você!"
}

function trocar6() {

    document.getElementById("alterar").src = "./img/celhemocentro.png"
    document.getElementById("msg").innerText = "Procure no mapa um hemocentro próximo de você!"
}