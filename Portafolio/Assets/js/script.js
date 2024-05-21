const nombre = document.getElementById("nombreform");
const email = document.getElementById("emailform");
const mensaje = document.getElementById("mensajeform");

const form = document.getElementById("Formulario");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", e => {
    e.preventDefault();
    let warnings = "";
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(nombre.value.length < 6){
        warnings += "El nombre no es válido <br>";
    }
    
    if(!regexEmail.test(email.value)){
        warnings += "El correo electrónico no es válido <br>";
    }

    if(warnings !== ""){
        parrafo.innerHTML = warnings;
        parrafo.style.color = "#ff0000"; 
        parrafo.style.backgroundColor = "#ffe6e6"; 
        parrafo.style.borderColor = "#ff0000"; 
        parrafo.style.display = "block"; 
    } else {
        parrafo.innerHTML = "Formulario enviado correctamente";
        parrafo.style.color = "#008000"; 
        parrafo.style.backgroundColor = "#d4edda"; 
        parrafo.style.borderColor = "#28a745"; 
        parrafo.style.display = "block"; 
    }
});


