/*
function welcomeMessage() {
    //const messageRef = document.getElementById("initial-message");
    document.getElementById("initial-message").innerHTML = `<h1> Hola, <em id = "name-visitor">visitante</em>, bienvenido</h1>`;
}*/

function getName() {
    
}

function changeWelcomeName() {
    const name = getName()
    console.log(typeof(name));
    document.getElementById("name-visitor").innerHTML = `${name}`;
}

function getName() {
    const nombre = prompt(`¿Cuál es tu nombre?`);    
    return nombre;
}

//welcomeMessage();