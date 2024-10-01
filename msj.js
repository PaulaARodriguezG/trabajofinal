function mostrarMensaje() {

    alert("¡Hola!! te vamos a extrañar mucho profe");

}

function cambiarColorFondo() {

    document.body.style.backgroundColor = "violet";

}

document.getElementById("mensajeBtn").addEventListener("click", mostrarMensaje);

document.getElementById("colorBtn").addEventListener("click", cambiarColorFondo);