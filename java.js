//variables generales
//botones
const btnMenu = document.getElementById("btn-menu")
const btnCerrar = document.getElementById("btn-close")
const btnAgregar = document.getElementById("btn-submit")
const btnFilters = document.getElementById("btn-filter")

//botones de filtros
const filtApellido = document.getElementById("filter-apellido")
const filtIngreso = document.getElementById("filter-ingreso")

//inputs 
const nombre = document.getElementById("nombre-alumno")
const apellido = document.getElementById("apellido-alumno")
const documento = document.getElementById("dni-alumno")
const ingreso = document.getElementById("ingreso-alumno")
const alertaDoc = document.getElementById("alert-doc")
const alertaIng = document.getElementById("alert-ing")
//elementos
const blockCard = document.getElementById("block-alumnos")
const contMateria = document.getElementById("cant-materias")
const menuAgregar = document.getElementById("menuAgregar")
const alumnosEncontrados = document.getElementById("items-encontrados")
const alumnoCard = document.getElementsByClassName(".alumno-card")
//datos

//constructor  
class alumno {
    constructor(nombre, apellido, documento, ingreso) {
        this.nombre = nombre
        this.apellido = apellido
        this.documento = documento
        this.ingreso = ingreso
    }
}
//funciones
//encontrados 
function alumnos (listaAlumnos){
    alumnosEncontrados.innerText = " "
    cantidad = listaAlumnos.length
    alumnosEncontrados.innerText = "Se han encontrado "+cantidad+" alumnos";
}   
//cards
function cardsAlumnos(listaAlumnos){
    blockCard.innerHTML = ` `
    for(const alumn of listaAlumnos){
            blockCard.innerHTML += `
            <div class="alumno-card">
                <div class="foto">
                    <img src="  perfil.jpg" alt="foto perfil">
                </div>
                <div class="datos-alumno">
                    <h3>Nombre Completo:</h3>
                    <p>${alumn.nombre} ${alumn.apellido}</p>
                    <h3>Nro Documento: </h3>
                    <p>${alumn.documento}</p>
                    <h3>Año de Ingreso:  </h3>
                    <p>${alumn.ingreso}</p>
                </div>
            </div>
            `
    }
}
//filters 
function ordenarApellido (l){
    listaAlumnos.sort((a,b) =>{
        if (a.apellido < b.apellido) {return -1;}
        if (a.apellido > b.apellido) {return 1;}
        return 0;
    })
    cardsAlumnos(listaAlumnos)
    console.log(listaAlumnos)
}
function ordenarIngreso (){
    listaAlumnos.sort((a,b) => {
        return b.ingreso - a.ingreso
    })
    cardsAlumnos(listaAlumnos)
    console.log(listaAlumnos)
}
filtApellido.addEventListener("click", () =>{
    ordenarApellido(listaAlumnos)
})
filtIngreso.addEventListener("click", () =>{
    ordenarIngreso(listaAlumnos)
})
//menus_________________________________________________________
function mostraMenu (){
    menuAgregar.classList.remove("agregar_ocultar")
    menuAgregar.classList.add("agregar_activate") ;
}
function ocultarMenu (){
    menuAgregar.classList.add("agregar_ocultar")
    menuAgregar.classList.remove("agregar_activate") ;
}
btnCerrar.addEventListener("click",() =>{
    ocultarMenu()
})
btnMenu.addEventListener("click" ,() => {
    mostraMenu()
    menuAgregar.scrollIntoView()
    
})

//formulario 
documento.onkeyup = () => {
    if(documento.value.length < 8){
        documento.style.borderColor = "#ff6c3e"     
        alertaDoc.style.display = "flex"
        alertaDoc.innerText = "Debe contener 8 digitos"
        alertaDoc.style.backgroundColor = "#d8f8e1"
    }
    else{
        alertaDoc.style.display = "none"
        documento.style.color = "black"
    }
}
ingreso.onkeyup = () => {
    if(ingreso.value < 2000){
        documento.style.borderColor = "#ff6c3e"     
        alertaIng.style.display = "flex"
        alertaIng.innerText = "Pon un año valido"
        alertaIng.style.backgroundColor = "#d8f8e1"
    }
    else{
        alertaIng.style.display = "none"
        documento.style.color = "black"
    }
}
function crearObjeto (nombre,apellido,documento,ingreso,){
    nombre = nombre.value
    apellido = apellido.value
    documento = documento.value
    ingreso = ingreso.value
    const nuevoAlumno = new alumno (nombre,apellido,documento, ingreso)
    listaAlumnos.push(nuevoAlumno)
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'El alumno ha sido agregado correctamente',
        showConfirmButton: false,
        timer: 2000
    })
    alumnos (listaAlumnos)
    cardsAlumnos(listaAlumnos)
    nombre = " "
    apellido= " "
    documento = " "
    ingreso = " "
}
btnAgregar.addEventListener("click",()=>{
    crearObjeto(nombre,apellido,documento,ingreso)
    ocultarMenu()
})
//ejecutados
cardsAlumnos(listaAlumnos)
alumnos(listaAlumnos)