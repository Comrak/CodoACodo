document.addEventListener("DOMContentLoaded", function () {

    // BOTONES DE PAGINA
    var pag_login = document.getElementsByClassName("inicio")[0]
    var pag_regis = document.getElementsByClassName("registro")[0]
    var sesion = document.getElementsByClassName("sesion")[0]
    var perfil = document.getElementsByClassName("main")[0]

    // INICIO DE SESION

    // TEXTO MAIL INICIO DE SESION
    var iniciomail = document.getElementById("inicio_mail")
    var txt_inicio_mail = "";
    iniciomail.addEventListener("input", function (event) {
        txt_inicio_mail = event.target.value;
    })
    // TEXTO PASS INICIO DE SESION 
    var iniciopass = document.getElementById("iniciopass")
    var txt_inicio_pass = "";
    iniciopass.addEventListener("input", function (event) {
        txt_inicio_pass = event.target.value;
    })

    // BOTONES DE INICIO DE SESION
    var btningresar = document.getElementById("ingresarsesion")
    var btnregistrarse = document.getElementById("registrarse")
    var btnnewpass = document.getElementById("new_pass")

    // REGISTRO DE CUENTA

    // TEXTO REGISTRO DE CUENTA
    var regis_mail = document.getElementById("reg_email1")
    var txt_regis_mail = "";
    regis_mail.addEventListener("input", function (event) {
        txt_regis_mail = event.target.value;
    })

    var conf_mail = document.getElementById("reg_email2")
    var txt_conf_mail = "";
    conf_mail.addEventListener("input", function (event) {
        txt_conf_mail = event.target.value;
    })

    var regis_username = document.getElementById("reg_username")
    var txt_regis_username = "";
    regis_username.addEventListener("input", function (event) {
        txt_regis_username = event.target.value;
    })

    var regis_pass = document.getElementById("reg_pass1")
    var txt_regis_pass = "";
    regis_pass.addEventListener("input", function (event) {
        txt_regis_pass = event.target.value;
    })

    var conf_pass = document.getElementById("reg_pass2")
    var txt_conf_pass = "";
    conf_pass.addEventListener("input", function (event) {
        txt_conf_pass = event.target.value;
    })

    // BOTONES DE REGISTRO DE CUENTA
    var btnconf_cuenta = document.getElementById("btn_registrar_cuenta")
    var btnya_es_user = document.getElementById("ya_es_user")

    // CERRAR SESION
    var btncerrar_sesion = document.getElementById("cerrar_sesion")



    var usuarios = [
        {
            id: "0000",
            username: "Admin",
            Email: "admin",
            password: "admin"

        }
    ]

    function sumarID() {
        var lastID = usuarios[usuarios.length - 1].id;
        var nuevoID = "";
        var llevaUno = true;

        for (var i = lastID.length - 1; i >= 0; i--) {
            var caracterActual = lastID.charAt(i);

            if (llevaUno) {
                if (caracterActual === "F") {
                    nuevoID = "0" + nuevoID;
                } else {
                    var valorHexa = parseInt(caracterActual, 16);
                    valorHexa++;
                    nuevoID = valorHexa.toString(16).toUpperCase() + nuevoID;
                    llevaUno = false;
                }
            } else {
                nuevoID = caracterActual + nuevoID;
            }
        }

        return nuevoID
    }

    function comprobarEmail(email) {
        for (var i = 0; i < usuarios.length; i++) {
            if (usuarios[i].Email === email) {
                return true;
            }
        }
        return false;
    }
    
    function validarCredenciales(mail, pass) {
        for (var i = 0; i < usuarios.length; i++) {
            if (usuarios[i].Email == mail) {
                if (usuarios[i].password == pass) {
                    return true; // Se encontró una coincidencia
                }else{
                    return false
                }
            }
            return false; // No se encontró ninguna coincidencia
        }
    }
    function crearUsuario(usname, mail, pass) {
        usuarios.push({
            id: sumarID(),
            username: String(usname),
            Email: String(mail),
            password: String(pass)
        })
    }

    function reiniciarDatos() {
        iniciomail.textContent = ""
        iniciopass.textContent = ""
        regis_mail.textContent = ""
        conf_mail.textContent = ""
        regis_username.textContent = ""
        regis_pass.textContent = ""
        conf_pass.textContent = ""
    }

    function mostrarInicio() {

        pag_login.classList.remove("desactivado")
        pag_regis.classList.add("desactivado")
        perfil.classList.add("desactivado")
        sesion.classList.remove("desactivado")

        reiniciarDatos()

    };
    function mostrarRegistro() {
        pag_login.classList.add("desactivado")
        pag_regis.classList.remove("desactivado")
        perfil.classList.add("desactivado")
        sesion.classList.remove("desactivado")

        reiniciarDatos()

    };
    function mostrarPerfil() {
        perfil.classList.remove("desactivado")
        sesion.classList.add("desactivado")

        reiniciarDatos()

    };

    btningresar.addEventListener("click", function () {

        if (validarCredenciales(txt_inicio_mail, txt_inicio_pass)) {
        
            mostrarPerfil()

        } else {
            
            alert(`Datos incorrectos. Intente de nuevo.`)
        }

    })

    btnconf_cuenta.addEventListener("click", function () {


        if (comprobarEmail(txt_regis_mail)) {
            alert("Este mail ya tiene vinculada una cuenta.")
        } else if (txt_regis_mail != txt_conf_mail) {
            alert("Los emails dados no coinciden. Por favor revisar y corregir el error.")
        } else if (txt_regis_mail == txt_conf_mail) {
            if (txt_regis_pass != txt_conf_pass) {
                alert("Las contraseñas no coinciden.")
            } else if (txt_regis_pass == txt_conf_pass) {
                crearUsuario(txt_regis_username, txt_regis_mail, txt_regis_pass)
                alert(`Cuenta creada con exito.`)
                console.log(sumarID())
                mostrarInicio()
            }
        }

    })

    btnregistrarse.addEventListener("click", function () {

        mostrarRegistro()

    })

    btnya_es_user.addEventListener("click", function () {

        mostrarInicio()

    })

    btncerrar_sesion.addEventListener("click", function () {

        mostrarInicio()

    })


});

