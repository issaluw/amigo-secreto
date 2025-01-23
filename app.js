let amigos = [];
let nombre = "";
let lista = document.getElementById('listaAmigos')

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function agregarAmigo(){
    lista.innerHTML = " ";
    nombre = document.getElementById('amigo').value;
    amigos.push(nombre);
    agregarNuevoElemento();
    console.log(amigos)
}

function validarEntrada(){
    if (nombre === ""){
        alert('Por favor, escriba un nombre');
        amigos.pop();
    } 
    return;
}

function agregarNuevoElemento(){
    for (let i = 0; i < amigos.length; i++){
        let nuevoElemeto = document.createElement("ul");
        nuevoElemeto.textContent = amigos[i];
        lista.appendChild(nuevoElemeto);
        }
}        

function sortearAmigo() {
    if (amigos == ""){
        alert('Por favor, escriba los nombres a sortear')
    } else {
        let indice = Math.floor(Math.random()*amigos.length);
        let amigoSeleccionado = amigos[indice];
        asignarTextoElemento('ul', amigoSeleccionado)
    }
}

function limpiarCampo() {
    document.getElementById('amigo').value = "";
}