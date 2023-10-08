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
            reader(id,16,1088,"OP","jpeg")
        }
        else if(this.id == "Naruto")
        {
            reader(id,18,452,"NAR","jpeg")
        }
        else if(this.id == "Bleach")
        {
            reader(id,20,452,"Bl","jpeg")
        }
        else if(this.id == "HxH")
        {
            reader(id,20,400,"HxH","jpeg")
        }
        else if(this.id == "MyHeroAcademia")
        {
            reader(id,16,402,"MHA","jpeg")
        }
        else if(this.id == "FairyTail")
        {
            reader(id,21,143,"FT","jpeg")
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

const reader = (id,maxPage,chapter,mangaShortName,imgExt)=>{
    pagina = 1
    changePage(id,maxPage,chapter,mangaShortName,imgExt)
    //le asigno eventos a los botones de flecha
    derecha.onclick = function() {
        //cambio la pagina y seteo una nueva url
        if (pagina < maxPage) {
            pagina++
        }
        changePage(id,maxPage,chapter,mangaShortName,imgExt)
    }
    izquierda.onclick = function() {
        //cambio la pagina y seteo una nueva url
        if (pagina > 1) {
            pagina--
        }
        changePage(id,maxPage,chapter,mangaShortName,imgExt)
    }
}
const changePage = (id,maxPage,chapter,mangaShortName,imgExt)=>{
    //seteo la url de la imagen
    url =`${urlRoot}${id}/${chapter}/${mangaShortName}-${chapter}-${pagina}.${imgExt}`
    //seteo el numero de pagina
    center.innerHTML = `${pagina}/${maxPage}`
    //asigno la imagen al modal
    imgModal.src = url
}