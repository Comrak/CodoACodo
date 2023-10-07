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
//asignar el evento click a cada imagen
for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].addEventListener('click', function () {
        //obtener el id de la imagen cliekada
        let id = this.id
        if (this.id == "OnePiece") {
            //seteo la URL en el caso de OnePiece
            url = urlRoot + id + "/1088/OP-1088-" + pagina + ".jpeg"
            //le asigno eventos a los botones de flecha
            derecha.onclick = function() {
                //cambio la pagina y seteo una nueva url
                pagina++
                url = urlRoot + id + "/1088/OP-1088-" + pagina + ".jpeg"
                imgModal.src = url
            }
            izquierda.onclick = function() {
                //cambio la pagina y seteo una nueva url
                if (pagina > 1) {
                    pagina--
                }
                url = urlRoot + id + "/1088/OP-1088-" + pagina + ".jpeg"
                imgModal.src = url
            }
        }else{
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