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

function trocar1() {
    document.getElementById("alterar").src = "./img/Celularlogo.png"
    document.getElementById("msg").innerText = "crie sua conta"

    const botaoAnimar = document.getElementById("animar1");
    const caixa = document.querySelector(".menucelular");
if (botaoAnimar.addEventListener("click")) {
   setTimeout(() => caixa.style.animation = "opacity 1s linear");
    };
    caixa.style.animation = "";
    
}

function trocar2() {

    document.getElementById("alterar").src = "./img/Celularmapa.png"
    document.getElementById("msg").innerText = "Procure no mapa um hemocentro próximo de você!"

    const botaoAnimar = document.getElementById("animar2");
    
    const caixa = document.querySelector(".menucelular").style.animation = "opacity 1s linear";
    botaoAnimar = caixa.style.animation = "opacity 1s linear";


    
     }




function trocar3() {

    document.getElementById("alterar").src = "./img/Celulardoe.png"
    document.getElementById("msg").innerText = "Faça um ato de amor, doe!"

    const botaoAnimar = document.getElementById("animar3");
    const caixa = document.querySelector(".menucelular");

    botaoAnimar.addEventListener("click", () => {
        caixa.style.animation = "";
        setTimeout(() => caixa.style.animation = "opacity 1s linear");
    });

}

function trocar4() {

    document.getElementById("alterar").src = "./img/CelularQRcode1.png"
    document.getElementById("msg").innerText = "Leia o QrCode no aplicativo"


    const botaoAnimar = document.getElementById("animar4");
    const caixa = document.querySelector(".menucelular");

    botaoAnimar.addEventListener("click", () => {
        caixa.style.animation = "";
        setTimeout(() => caixa.style.animation = "opacity 1s linear");
    });

}

function trocar5() {

    document.getElementById("alterar").src = "./img/Celularacumule.png"
    document.getElementById("msg").innerText = "Acumule pontos"

    const botaoAnimar = document.getElementById("animar5");
    const caixa = document.querySelector(".menucelular");

    botaoAnimar.addEventListener("click", () => {
        caixa.style.animation = "";
        setTimeout(() => caixa.style.animation = "opacity 1s linear"    );
    });

}

function trocar6() {

    document.getElementById("alterar").src = "./img/Celulartroque.png"
    document.getElementById("msg").innerText = "Troque seus pontos!"

    const botaoAnimar = document.getElementById("animar6");
    const caixa = document.querySelector(".menucelular");

    botaoAnimar.addEventListener("click", () => {
        caixa.style.animation = "";
        setTimeout(() => caixa.style.animation = "opacity 0.5s linear");
    });

}