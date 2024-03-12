/*
Exercise #5
For each of the exercises below, assume you are starting with the following people array.
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
*/

const personas = ["María", "Dani", "Luis", "Juan", "Camila"];

/* 1. Write a command that prints out all of the people in the list. */
console.log(`${personas.join(', ')}`);

/* 2. Write the command to remove "Dani" from the array.*/

function quitarDelArreglo (personaAQuitar, arregloPersonas) {
    if ( arregloPersonas.includes(personaAQuitar)){
        return arregloPersonas.splice(arregloPersonas.indexOf(personaAQuitar), 1);
    }
    return arregloPersonas;
}
quitarDelArreglo("Dani", personas)
console.log(`${personas.join(', ')}`);


/* 3. Write the command to remove "Juan" from the array.*/
quitarDelArreglo("Juan", personas);
console.log(`${personas.join(', ')}`);

/* 4. Write the command to move "Luis" to the front of the array. */
function moverAlInicio(peopleArr, personToMove) {
    const index = peopleArr.indexOf(personToMove);
    if (index !== -1) {
        peopleArr.splice(index, 1); // remover persona
        peopleArr.unshift(personToMove); // agregar persona al inicio
    }
    return peopleArr;
}

moverAlInicio( personas, "Luis")
console.log(`${personas.join(', ')}`);

/* 5. Write the command to add your name to the end of the array. */
personas.push("Javo");
console.log(`${personas.join(', ')}`);

/* 6. Using a loop, iterate through this array and after console.log "Maria", exit from the loop.*/

findmaria:
    for (let i = 0; i < personas.length; i++) {
        console.log(`${personas[i]}`);
        if (personas[i] === "María") break findmaria;
    }

/* 7. Write the command that gives the indexOf where "Maria" is located. */
console.log(`${personas.indexOf("María")}`);

/*
At the end of the exercise, there should be 4 people in the array.*/
console.log(`${personas.join(', ')}`);