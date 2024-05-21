const fila = document.querySelector('.contenedor-carousel');
const peliculas = document.querySelectorAll('.pelicula');
const canciones = document.querySelectorAll('.cancion')

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

flechaDerecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;
})

flechaIzquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;
})



peliculas.forEach((pelicula) => {
    pelicula.addEventListener('mouseenter', (e) =>{
        const elemento = e.currentTarget;
        setTimeout(() => {
            peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
            elemento.classList.add('hover');
        }, 300)
    })
})

fila.addEventListener('mouseleave', () => {
    peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
})

