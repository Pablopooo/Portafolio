/* api */


document.getElementById("mostrar").addEventListener("click", mostrarDatosAPI, true);
document.getElementById("volver").addEventListener("click", function() {
    window.location.href = "/index.html";
});
function mostrarDatosAPI() {
    fetch('https://nekos.best/api/v2/neko')
    .then(response => response.json())
    .then(json => {
        const result = json.results[0];
        const imageUrl = result.url;
        const artistName = result.artist_name;
        console.log('Image URL:', imageUrl);
        console.log('Artist Name:', artistName);
        actualizarContenido(imageUrl, artistName);
    })
    .catch(error => console.error('Error:', error));
}

function actualizarContenido(imageUrl, artistName) {
    const contenido = document.querySelector("#contenido");

   
    const image = document.createElement('img');
    image.src = imageUrl;
    image.alt = 'Neko Image';
    image.classList.add('neko-image');
    
    const artist = document.createElement('p');
    artist.textContent = `Artist: ${artistName}`;
    artist.style.fontSize ='40px';
    artist.style.color ='black';
    
   
    contenido.innerHTML = '';

   
    contenido.appendChild(image);
    contenido.appendChild(artist);
}