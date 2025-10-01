const formulario = document.getElementById("formulario");

const mensajes = {
    texto: "Acceso denegado",
    email: "Correo inválido",
    contrasena: "Contraseña incorrecta",
    numero: "Edad no permitida",
    especialidad: "Selecciona tu especialidad",
    planeta: "Selecciona tu planeta de origen",
    fecha: "Selecciona una fecha válida",
    rango: "Nivel de condición física requerido",
    archivo: "Debes subir tu expediente médico",
    checkbox: "Debes aceptar los riesgos"
};

function validarCampo(campo, valido) {
    if (valido) {
        campo.classList.add("valido");
        campo.classList.remove("invalido");
    } else {
        campo.classList.add("invalido");
        campo.classList.remove("valido");
    }
}

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    let todoCorrecto = true;

    const nombre = document.getElementById("texto");
    if (nombre.value.trim().length < 3) {
        validarCampo(nombre, false);
        alert(mensajes.texto);
        todoCorrecto = false;
    } else {
        validarCampo(nombre, true);
    }

    const email = document.getElementById("email");
    if (!email.value.includes("@") || email.value.trim() === "") {
        validarCampo(email, false);
        alert(mensajes.email);
        todoCorrecto = false;
    } else {
        validarCampo(email, true);
    }

    const contrasena = document.getElementById("contrasena");
    if (contrasena.value.length < 8) {
        validarCampo(contrasena, false);
        alert(mensajes.contrasena);
        todoCorrecto = false;
    } else {
        validarCampo(contrasena, true);
    }

    const edad = document.getElementById("numero");
    if (edad.value < 25 || edad.value > 50) {
        validarCampo(edad, false);
        alert(mensajes.numero);
        todoCorrecto = false;
    } else {
        validarCampo(edad, true);
    }

    const especialidad = document.querySelector('input[name="especialidad"]:checked');
    if (!especialidad) {
        todoCorrecto = false;
        alert(mensajes.especialidad);
    }

    const planeta = document.getElementById("planeta");
    if (planeta.value === "") {
        validarCampo(planeta, false);
        alert(mensajes.planeta);
        todoCorrecto = false;
    } else {
        validarCampo(planeta, true);
    }

    const fecha = document.getElementById("fecha");
    if (fecha.value === "") {
        validarCampo(fecha, false);
        alert(mensajes.fecha);
        todoCorrecto = false;
    } else {
        validarCampo(fecha, true);
    }

    const rango = document.getElementById("rango");
    if (rango.value === "") {
        validarCampo(rango, false);
        alert(mensajes.rango);
        todoCorrecto = false;
    } else {
        validarCampo(rango, true);
    }

    const archivo = document.getElementById("archivo");
    if (!archivo.files.length) {
        validarCampo(archivo, false);
        alert(mensajes.archivo);
        todoCorrecto = false;
    } else {
        validarCampo(archivo, true);
    }

    const checkbox = document.getElementById("checkbox");
    if (!checkbox.checked) {
        validarCampo(checkbox, false);
        alert(mensajes.checkbox);
        todoCorrecto = false;
    } else {
        validarCampo(checkbox, true);
    }

    if (todoCorrecto) {
        alert("Todo ha sido correcto.");
        formulario.reset();
    }

});
