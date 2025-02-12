import {barcelona, roma, paris, londres} from './ciudades.js'

let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subtituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')
let precioElemento = document.getElementById('precio')

//Agregar un evento CLICK a cada enlace
enlaces.forEach(function(enlace){
    enlace.addEventListener('click', function() {
        //Remover la clase active de todos los enlaces
        enlaces.forEach(function (enlace){
            enlace.classList.remove('active');
        });

        //agrega la clase active  al enlace actual
        this.classList.add('active')
        //Obtener el contenido correpondiente según el enlace
        let contenido = obtenerContenido(this.textContent)
        //Mostrar el contenido en el DOM
        tituloElemento.innerHTML = contenido.titulo
        subtituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
        precioElemento.innerHTML = contenido.precio
    });
});


function obtenerContenido(enlace){
    let contenido = {
        'Barcelona' : barcelona,
        'Roma' : roma,
        'París' : paris,
        'Londres' : londres
    };
    return contenido[enlace];
}




