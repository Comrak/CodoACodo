let formulario = document.getElementById("formulario")

formulario.addEventListener("submit", function (e) {
    e.preventDefault()
    let nombre = document.getElementById("nombre").value
    // let apellido = document.getElementById("apellido").value
    let email = document.getElementById("email").value
    // let telefono = document.getElementById("telefono").value
    let mensaje = document.getElementById("mensaje").value
    let error = document.getElementById("error")
    error.style.color = "red"
    let mensajesError = []
    if (nombre.length < 3) {
        mensajesError.push("Ingrese un nombre válido")
    }
    if (email.length < 3) {
        mensajesError.push("Ingrese un email válido")
    }
    // if(tipo.value == ""){
    //     mensajesError.push("Seleccione un tipo de consulta")
    // }
    if (mensaje.length < 3) {
        mensajesError.push("Ingrese un mensaje válido")
    }
    error.innerHTML = mensajesError.join(", ")
    if (mensajesError.length == 0) {
        error.innerHTML = "Mensaje enviado correctamente"
        error.style.color = "green"
        alert("Mensaje enviado correctamente")
    }
})