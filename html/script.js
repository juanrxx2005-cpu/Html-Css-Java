document.addEventListener("DOMContentLoaded", function () {

    const formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", function (event) {

        let documento = document.getElementById("documento").value;
        let nombres = document.getElementById("nombres").value;
        let apellidos = document.getElementById("apellidos").value;
        let telefono = document.getElementById("telefono_celular").value;
        let correo = document.getElementById("correo").value;
        let password = document.getElementById("password").value;

        // Validaciones
        if (documento.length < 6 || documento.length > 12) {
            alert("Documento inválido (6-12 números)");
            event.preventDefault();
            return;
        }

        if (nombres.length < 3) {
            alert("Nombre muy corto");
            event.preventDefault();
            return;
        }

        if (apellidos.length < 3) {
            alert("Apellido muy corto");
            event.preventDefault();
            return;
        }

        if (telefono.length !== 10) {
            alert("Teléfono celular debe tener 10 dígitos");
            event.preventDefault();
            return;
        }

        if (!correo.includes("@")) {
            alert("Correo inválido");
            event.preventDefault();
            return;
        }

        if (password.length < 8) {
            alert("La contraseña debe tener mínimo 8 caracteres");
            event.preventDefault();
            return;
        }

        alert("Formulario enviado correctamente ✅");
    });

});