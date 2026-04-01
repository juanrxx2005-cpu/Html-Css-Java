// Animación al cargar la página
window.addEventListener("load", function () {
    document.getElementById("contenedor").classList.add("visible");
});

// Evento al hacer clic en el nombre
document.getElementById("nombre").addEventListener("click", function () {
    alert("Hola, soy Juan Ruiz 👨‍💻");
});

// Evento al pasar el mouse por la sección izquierda
document.getElementById("izquierda").addEventListener("mouseenter", function () {
    this.style.backgroundColor = "#f0f8ff";
});

document.getElementById("izquierda").addEventListener("mouseleave", function () {
    this.style.backgroundColor = "white";
});

// Evento en la sección derecha
document.getElementById("derecha").addEventListener("mouseenter", function () {
    this.style.backgroundColor = "#dfe6e9";
});

document.getElementById("derecha").addEventListener("mouseleave", function () {
    this.style.backgroundColor = "#ecf0f1";
});