function agregarProducto (item, precio){
    if (precio > 1200 ){
        let precioDescuento = precio*0.9
        alert("Tienes un descuento del 10%, el nuevo precio del "+ item+ " seria de "+ precioDescuento)
    }
    else{
        alert("El precio de "+ item +  " es de "+precio)
    }
}

let item = prompt("¿Que producto estas comprando?")
alert("Si el producto supera los 1200 tienes un descuento del 10%")
let precio = prompt("¿Que precio tiene ")

agregarProducto (item, precio)







