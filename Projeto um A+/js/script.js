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

function onClickMenu () {
    document.getElementById("menu").classList.toggle("icon");
    document.getElementById("nav").classList.toggle("change");
}