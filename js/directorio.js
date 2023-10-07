//obtener todas las imagenes
let imagenes = document.getElementsByTagName('img')
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
//obtener el elemento modal
let modal = document.getElementById('mangaReader')
// obtengo la flecha derecha
let derecha = document.getElementById('right')
// obtengo la flecha izquierda
let izquierda = document.getElementById('left')
//agrego variable url y la seteo en ../img/
let urlRoot = "../img/"
let pagina = 1
//tomo el elemento img del modal
let imgModal = document.getElementById('imgReader')
//tomo el elemento center del modal
let center = document.getElementById('center')
//asignar el evento click a cada imagen
for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].addEventListener('click', function () {
        //obtener el id de la imagen cliekada
        let id = this.id
        if (this.id == "OnePiece") 
        {
            pagina = 1
            center.innerHTML = pagina + "/16"
            //seteo la URL en el caso de OnePiece
            url = urlRoot + id + "/1088/OP-1088-" + pagina + ".jpeg"
            //le asigno eventos a los botones de flecha
            derecha.onclick = function() {
                //cambio la pagina y seteo una nueva url
                if (pagina < 16) {
                    pagina++
                }
                url = urlRoot + id + "/1088/OP-1088-" + pagina + ".jpeg"
                center.innerHTML = pagina + "/16"
                imgModal.src = url
            }
            izquierda.onclick = function() {
                //cambio la pagina y seteo una nueva url
                if (pagina > 1) {
                    pagina--
                }
                url = urlRoot + id + "/1088/OP-1088-" + pagina + ".jpeg"
                center.innerHTML = pagina + "/16"
                imgModal.src = url
            }
        }
        else if(this.id == "Naruto")
        {
            pagina = 1
            center.innerHTML = pagina + "/18"
            url = urlRoot + id + "/452/NAR-452-" + pagina + ".jpeg"
            //le asigno eventos a los botones de flecha
            derecha.onclick = function() {
                //cambio la pagina y seteo una nueva url
                if (pagina < 18) {
                    pagina++
                }
                url = urlRoot + id + "/452/NAR-452-" + pagina + ".jpeg"
                center.innerHTML = pagina + "/18"
                imgModal.src = url
            }
            izquierda.onclick = function() {
                //cambio la pagina y seteo una nueva url
                if (pagina > 1) {
                    pagina--
                }
                url = urlRoot + id + "/452/NAR-452-" + pagina + ".jpeg"
                center.innerHTML = pagina + "/18"
                imgModal.src = url
            }
        }
        else if(this.id == "Bleach")
        {
            pagina = 1
            center.innerHTML = pagina + "/20"
            url = urlRoot + id + "/452/Bl-452-" + pagina + ".jpeg"
            //le asigno eventos a los botones de flecha
            derecha.onclick = function() {
                //cambio la pagina y seteo una nueva url
                if (pagina < 20) {
                    pagina++
                }
                url = urlRoot + id + "/452/Bl-452-" + pagina + ".jpeg"
                center.innerHTML = pagina + "/20"
                imgModal.src = url
            }
            izquierda.onclick = function() {
                //cambio la pagina y seteo una nueva url
                if (pagina > 1) {
                    pagina--
                }
                url = urlRoot + id + "/452/Bl-452-" + pagina + ".jpeg"
                center.innerHTML = pagina + "/20"
                imgModal.src = url
            }
        }
        else if(this.id == "HxH")
        {
            pagina = 1
            center.innerHTML = pagina + "/20"
            url = urlRoot + id + "/400/HxH-400-" + pagina + ".jpeg"
            //le asigno eventos a los botones de flecha
            derecha.onclick = function() {
                //cambio la pagina y seteo una nueva url
                if (pagina < 20) {
                    pagina++
                }
                url = urlRoot + id + "/400/HxH-400-" + pagina + ".jpeg"
                center.innerHTML = pagina + "/20"
                imgModal.src = url
            }
            izquierda.onclick = function() {
                //cambio la pagina y seteo una nueva url
                if (pagina > 1) {
                    pagina--
                }
                url = urlRoot + id + "/400/HxH-400-" + pagina + ".jpeg"
                center.innerHTML = pagina + "/20"
                imgModal.src = url
            }
        }
        else if(this.id == "MyHeroAcademia")
        {
            pagina = 1
            center.innerHTML = pagina + "/16"
            url = urlRoot + id + "/402/MHA-402-" + pagina + ".jpeg"
            //le asigno eventos a los botones de flecha
            derecha.onclick = function() {
                //cambio la pagina y seteo una nueva url
                if (pagina < 16) {
                    pagina++
                }
                url = urlRoot + id + "/402/MHA-402-" + pagina + ".jpeg"
                center.innerHTML = pagina + "/16"
                imgModal.src = url
            }
            izquierda.onclick = function() {
                //cambio la pagina y seteo una nueva url
                if (pagina > 1) {
                    pagina--
                }
                url = urlRoot + id + "/402/MHA-402--" + pagina + ".jpeg"
                center.innerHTML = pagina + "/16"
                imgModal.src = url
            }
        }
        else if(this.id == "FairyTail")
        {
            pagina = 1
            center.innerHTML = pagina + "/21"
            url = urlRoot + id + "/143/FT-143-" + pagina + ".jpeg"
            //le asigno eventos a los botones de flecha
            derecha.onclick = function() {
                //cambio la pagina y seteo una nueva url
                if (pagina < 21) {
                    pagina++
                }
                url = urlRoot + id + "/143/FT-143-" + pagina + ".jpeg"
                center.innerHTML = pagina + "/21"
                imgModal.src = url
            }
            izquierda.onclick = function() {
                //cambio la pagina y seteo una nueva url
                if (pagina > 1) {
                    pagina--
                }
                url = urlRoot + id + "/143/FT-143-" + pagina + ".jpeg"
                center.innerHTML = pagina + "/21"
                imgModal.src = url
            }
        }
        else
        {
            url = urlRoot + "error404-2.png"
        }
        //asigno la url a la imagen
        imgModal.src = url
        modal.style.display = "block";
        
    })
}
span.onclick = function() {
    modal.style.display = "none";
}


