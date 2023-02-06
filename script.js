const productos = [
    {nombre:"harina", precio:50},
    {nombre:"galletitas", precio:100},
    {nombre:"cerveza", precio:150},
    {nombre:"leche", precio:200},
    {nombre:"gaseosa", precio:250},
];

let carrito = [];

let seleccion = prompt("hola desea comprar algun producto");

while(seleccion != "si" && seleccion != "no") {
    alert("ingresar si o no")
    seleccion = prompt("hola desea comprar algun producto");
}

if(seleccion == "si"){
    alert("a continuacion nuestra lista de productos");
    let todoslosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$");
    alert(todoslosProductos.join(" - "))
}
else if (seleccion = "no"){
    alert("gracias por visitarnos!")
}
while(seleccion != "no"){
    let producto = prompt("agregar al carrito")
    let precio = 0


    if(producto == "harina" || producto == "galletitas" || producto == "cerveza" || producto == "leche" || producto == "gaseosa"){
        switch (producto) {
            case "harina":
                precio = 50
                break;
                case "galletitas":
                precio = 100
                break;
                case "cerveza":
                precio = 150
                break;
                case "leche":
                precio = 200
                break;
                case "gaseosa":
                precio = 250
                break;
                default:
                    break;
        }
        
        let unidades = parseInt(prompt("cuantas unidades quiere"))
        carrito.push({producto, unidades, precio})
        console.log(carrito)
    }
    else {
        alert("no tenemos ese producto")
    }
    seleccion = prompt("desea seguir comprando?")

    while(seleccion === "no"){
    alert("gracias por la compra")
    carrito.forEach((carritoFinal) => {
        console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades},
        total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
     })
     break; 
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`el total a pagar por su compra: ${total} `)

