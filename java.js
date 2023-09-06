class materia {
    constructor(nombreMateria, profesor, aula) {
        this.nombreMateria = nombreMateria;
        this.profesor = profesor;
        this.aula = aula
    }
}

function agregarMateria() {
    let nombre = prompt("¿Que materia es?")
        let profe = prompt("¿Que profesor es")
        let aula = prompt("¿Que aula es")
        const mate = new materia(nombre, profe, aula)
        listMaterias.push(mate)
    }
function menu() {
    agregarMateria()
    console.log(listMaterias)
    alert("La cantidad de materias en la lista es " + listMaterias.length)
}

let listMaterias = []

alert("Puedes agregar 5 materias")
for (let step = 0; step < 5; step++) {
    respuesta = prompt("quieres agrega una materia escribe si")
    if (respuesta=="si"){
        menu( )
    }
    else{
        break
    }
}

console.log(listMaterias)

