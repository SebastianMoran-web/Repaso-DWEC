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

function celsiusAFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

celsiusAFahrenheit(100)

function fahrenheitACelsius(fahren) {
    return (fahren - 32) * 5 / 9;
}

fahrenheitACelsius(32)

function convertirTemperatura(valor, de, a) {
    if (de === a) return valor;
    if (de === "C" && a === "F") return celsiusAFahrenheit(valor);
    if (de === "F" && a === "C") return fahrenheitACelsius(valor);
    return null;
}

convertirTemperatura(100, "C", "F")  

function longitudSuficiente(texto, minimo = 8) {
    return texto.length >= minimo;
}

longitudSuficiente("1234567")

function tieneMayuscula(texto) {
    return texto !== texto.toLowerCase();
}

tieneMayuscula("abc")

function tieneMinuscula(texto) {
    return texto !== texto.toUpperCase();
}

tieneMinuscula("ABC")

function tieneNumero(texto) {
    const numeros = "0123456789";
    for (let i = 0; i < texto.length; i++) {
        if (numeros.includes(texto[i])) {
            return true;
        }
    }
    return false;
}

tieneNumero("abc1")

function evaluarContraseña(texto) {
    let puntos = 0;
    
    if (longitudSuficiente(texto)) puntos++;
    if (tieneMayuscula(texto)) puntos++;
    if (tieneMinuscula(texto)) puntos++;
    if (tieneNumero(texto)) puntos++;

    if (puntos === 4) return "fuerte";
    if (puntos === 3) return "media";
    return "débil";
}

evaluarContraseña("Abcdefgh")
evaluarContraseña("Abcdefg1")

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

numeroAleatorio(1, 6)

function caracterAleatorio(conjunto) {
    const indice = numeroAleatorio(0, conjunto.length - 1);
    return conjunto[indice];
}

caracterAleatorio("abc")

function generarContraseña(longitud, opciones = { mayusculas: true, numeros: true }) {
    if (!Number.isInteger(longitud) || longitud < 6 || longitud > 30) {
        return null;
    }
}    

generarContraseña(12)
generarContraseña(3)  

function palabras(texto) {
    const textoLimpio = texto.trim();
    if (textoLimpio === "") return [];
    return textoLimpio.split(/\s+/);
}

palabras("hola   mundo")

function contarPalabras(texto) {
    return palabras(texto).length;
}

contarPalabras("hola   mundo")

function contarCaracteres(texto, conEspacios = true) {
    if (conEspacios) {
        return texto.length;
    }
    return texto.replaceAll(" ", "").length;
}

contarCaracteres("a b c", false)

function palabraMasLarga(texto) {
    const lista = palabras(texto);
    let masLarga = "";

    for (let i = 0; i < lista.length; i++) {
        if (lista[i].length > masLarga.length) {
            masLarga = lista[i];
        }
    }
    return masLarga;
}

palabraMasLarga("El perro rápido")

function minutosLectura(texto, ppm = 200) {
    const totalPalabras = contarPalabras(texto);
    if (totalPalabras === 0) return 0;
    return Math.ceil(totalPalabras / ppm);
}

minutosLectura("")

function esNumeroValido(texto) {

    if (typeof texto !== "string" || texto.trim() === "") {
        return false;
    }

    return !Number.isNaN(Number(texto));
}

esNumeroValido("12")
esNumeroValido("")  
esNumeroValido("12px")