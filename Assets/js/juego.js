const fila = document.querySelector('.contenedor-carousel');
const juegos = document.querySelectorAll('.juego');


juegos.forEach((juego) => {
    juego.addEventListener('mouseenter', (e) =>{
        const elemento = e.currentTarget;
        setTimeout(() => {
            juegos.forEach(juego => juego.classList.remove('hover'));
            elemento.classList.add('hover');
        }, 300)
    })
})

fila.addEventListener('mouseleave', () => {
    juegos.forEach(juego => juego.classList.remove('hover'));
})

