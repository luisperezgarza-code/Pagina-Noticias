const noticias = [

{
categoria:"MONTERREY",
titulo:"Nuevo proyecto urbano transforma el centro de Monterrey",
descripcion:"El municipio presentó un plan para modernizar calles, áreas verdes y espacios públicos.",
imagen:"img/foto/hero.jpg"
},

{
categoria:"APODACA",
titulo:"Inician nuevas inversiones para el municipio",
descripcion:"Empresas internacionales anuncian nuevas plantas industriales.",
imagen:"img/noticia1.jpg"
},

{
categoria:"GUADALUPE",
titulo:"Más seguridad para las colonias",
descripcion:"Se incorporan nuevas patrullas y cámaras de vigilancia.",
imagen:"img/noticia2.jpg"
},

{
categoria:"SANTIAGO",
titulo:"El turismo rompe récord este fin de semana",
descripcion:"Miles de visitantes llegaron a la presa y al centro histórico.",
imagen:"img/noticia3.jpg"
}

];

let actual=0;

const img=document.getElementById("heroImagen");
const titulo=document.getElementById("heroTitulo");
const descripcion=document.getElementById("heroDescripcion");
const categoria=document.getElementById("heroCategoria");

function mostrarNoticia(i){

img.src=noticias[i].imagen;

titulo.innerHTML=noticias[i].titulo;

descripcion.innerHTML=noticias[i].descripcion;

categoria.innerHTML=noticias[i].categoria;

}

function siguiente(){

actual++;

if(actual>=noticias.length){

actual=0;

}

mostrarNoticia(actual);

}

function anterior(){

actual--;

if(actual<0){

actual=noticias.length-1;

}

mostrarNoticia(actual);

}

document.querySelector(".derecha").onclick=siguiente;

document.querySelector(".izquierda").onclick=anterior;

setInterval(siguiente,5000);

mostrarNoticia(actual);

const cerrar=document.getElementById("cerrarPublicidad");

cerrar.onclick=function(){

document.querySelector(".barra-publicidad").style.display="none";

};

const banners=[

"img/publicidad/publicidad1.jpg",

"img/publicidad/publicidad2.jpg",

"img/publicidad/publicidad3.jpg",

"img/publicidad/publicidad4.jpg"

];

let bannerActual=0;

const banner=document.getElementById("bannerPublicidad");

setInterval(()=>{

bannerActual++;

if(bannerActual>=banners.length){

bannerActual=0;

}

banner.src=banners[bannerActual];

},8000);