function esNumeroValido(texto) {
    if (typeof texto !== "string" || texto.trim() === "") {
        return false;
    }
    return !Number.isNaN(Number(texto));
}


function manejarIVA() {
    const txtPrecio = document.getElementById("inp-precio").value;
    const txtIva = document.getElementById("inp-iva").value;
    const txtDesc = document.getElementById("inp-desc").value;
    const cajaResultado = document.getElementById("res-precio");


    if (!esNumeroValido(txtPrecio)) {
        cajaResultado.textContent = "Error: El precio es obligatorio y debe ser un número válido.";
        return;
    }

    let iva = 21;
    if (txtIva.trim() !== "") {
        if (!esNumeroValido(txtIva)) {
            cajaResultado.textContent = "Error: El IVA debe ser un número válido.";
            return;
        }
        iva = Number(txtIva);
    }

    let descuento = 0;
    if (txtDesc.trim() !== "") {
        if (!esNumeroValido(txtDesc)) {
            cajaResultado.textContent = "Error: El descuento debe ser un número válido.";
            return;
        }
        descuento = Number(txtDesc);
    }

    const precioBase = Number(txtPrecio);
    const precioRebajado = aplicarDescuento(precioBase, descuento);
    const totalConIva = precioConIVA(precioRebajado, iva);
    const totalRedondeado = redondear(totalConIva, 2);
    const textoFinal = formatearEuros(totalRedondeado);

    cajaResultado.textContent = "Total a pagar: " + textoFinal;
}


function manejarTemperatura() {

    const txtTemp = document.getElementById("inp-temp").value;
    const de = document.getElementById("sel-de").value;
    const a = document.getElementById("sel-a").value;
    const cajaResultado = document.getElementById("res-temp");

    if (!esNumeroValido(txtTemp)) {
        cajaResultado.textContent = "Error: Introduce una temperatura numérica válida.";
        return;
    }

    const valorConvertido = convertirTemperatura(Number(txtTemp), de, a);
    const valorRedondeado = redondear(valorConvertido, 2);

    cajaResultado.textContent = `${valorRedondeado} °${a}`;
}

function manejarEvaluarContraseña() {

    const pass = document.getElementById("inp-pass-eval").value;
    const cajaResultado = document.getElementById("res-eval");

    if (pass === "") {
        cajaResultado.textContent = "Error: Escribe una contraseña para evaluarla.";
        return;
    }

    const seguridad = evaluarContraseña(pass);

    cajaResultado.textContent = "Seguridad de la contraseña: " + seguridad;
}

function manejarGenerarContraseña() {

    const txtLongitud = document.getElementById("inp-pass-len").value;
    const incMayus = document.getElementById("chk-mayus").checked;
    const incNum = document.getElementById("chk-num").checked;
    const cajaResultado = document.getElementById("res-gen");

    if (!esNumeroValido(txtLongitud)) {
        cajaResultado.textContent = "Error: La longitud debe ser un número.";
        return;
    }

    const nuevaPass = generarContraseña(Number(txtLongitud), {
        mayusculas: incMayus,
        numeros: incNum
    });

    if (nuevaPass === null) {
        cajaResultado.textContent = "Error: La longitud debe ser un número entero entre 6 y 30.";
    } else {
        cajaResultado.textContent = "Contraseña generada: " + nuevaPass;
    }
}

function manejarContadorPalabras() {

    const texto = document.getElementById("inp-texto").value;
    const txtPpm = document.getElementById("inp-ppm").value;
    const cajaResultado = document.getElementById("res-texto");

    let ppm = 200;
    if (txtPpm.trim() !== "") {
        if (!esNumeroValido(txtPpm) || Number(txtPpm) <= 0) {
            cajaResultado.textContent = "Error: Las palabras por minuto deben ser un número positivo.";
            return;
        }
        ppm = Number(txtPpm);
    }

    const numPalabras = contarPalabras(texto);
    const conEspacios = contarCaracteres(texto, true);
    const sinEspacios = contarCaracteres(texto, false);
    const masLarga = palabraMasLarga(texto);
    const minutos = minutosLectura(texto, ppm);

    cajaResultado.textContent = `Palabras: ${numPalabras} | Caracteres (con/sin espacios): ${conEspacios}/${sinEspacios} | Más larga: "${masLarga}" | Lectura: ${minutos} min.`;
}

document.getElementById("btn-precio").addEventListener("click", manejarIVA);
document.getElementById("btn-temp").addEventListener("click", manejarTemperatura);
document.getElementById("btn-eval").addEventListener("click", manejarEvaluarContraseña);
document.getElementById("btn-gen").addEventListener("click", manejarGenerarContraseña);
document.getElementById("btn-texto").addEventListener("click", manejarContadorPalabras);