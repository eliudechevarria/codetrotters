// alert ('Hello World!');

function hola(){
    var name = prompt('Cual es tu nombre?');
    alert(name);
}

document.getElementById('boton').addEventListener('click', hola);