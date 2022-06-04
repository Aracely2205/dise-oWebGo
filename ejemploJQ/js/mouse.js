$(document).ready(inicio);

function inicio() {
    $("#perritos").mouseenter(onCambiarImagen);
    $("#perritos").mouseleave(onRegresarImagen);
}

function onCambiarImagen() {
    $("#perritos").css("background.image", "url(img/pitbull.jpg");
}

function onRegresarImagen() {
    $("#perritos").css("background.image", "url(img/pitbull2.png");
}