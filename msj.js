function mostrarMensaje() {

    alert("¡Hola!! te vamos a extrañar mucho ");

}

function cambiarColorFondo() {

    document.body.style.backgroundColor = "lightblue";

}

document.getElementById("mensajeBtn").addEventListener("click", mostrarMensaje);

document.getElementById("colorBtn").addEventListener("click", cambiarColorFondo);