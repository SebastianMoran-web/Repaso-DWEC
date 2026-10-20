/*calcularIVA(precio, tipo)
Recibe: un precio y el porcentaje de IVA. Si no se indica el IVA, se usa 21.
Devuelve: cuánto IVA hay que pagar.
Ejemplos
calcularIVA(100)  →  21
calcularIVA(100, 10)  →  10*/

function calcularIVA(precio, tipo) {
    return precio * (tipo / 100);
}

calcularIVA(100, 10);

/*precioConIVA(precio, tipo)
Recibe: un precio y el porcentaje de IVA (por defecto 21).
Devuelve: el precio más el IVA. Tiene que usar calcularIVA.
Ejemplo:
precioConIVA(50, 10)  →  55*/

function precioIVA(precio, tipo){

    return precio + calcularIVA(precio, tipo)
}

precioIVA(50, 10);

/*aplicarDescuento(precio, porcentaje)
Recibe: un precio y un porcentaje de descuento.
Devuelve: el precio después del descuento.
Ejemplos:
aplicarDescuento(80, 25)  →  60
aplicarDescuento(80, 0)  →  80*/
function aplicardescuento(precio, porcentaje){

    return  precio - (precio * (porcentaje / 100))

}

aplicardescuento(80, 25)

/*redondear(numero, decimales = 0)
Recibe: un número y cuántos decimales quieres (por defecto 2).
Devuelve: el número redondeado.
Ejemplos:
redondear(2.567)  →  2.57
redondear(2.5, 0)  →  3*/

function redondear (numero){

    return  numero.toFixed(2)

}

redondear(2.567);

/*formatearEuros(numero)
Recibe: un número.
Devuelve: un texto con dos decimales, coma y el símbolo €.
Ejemplo:
formatearEuros(1234.5)  →  "1234,50 €"*/

function formatear(numero){

    return numero.replace(".",",") + "€"  ;
}

formatear("1234.5")

function calcularIvalog(precio, tipo){
    console.log(precio * (tipo / 100));
}

calcularIvalog(100, 10);


function precioIvalog(precio, tipo){
    return precio + calcularIvalog(precio, tipo);
}

precioIvalog(50, 10);

const aplicardescuentoFlecha = (precio,porcentaje) => precio -(precio * (porcentaje/100));

aplicardescuentoFlecha(80,25)