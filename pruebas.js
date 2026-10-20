let pruebasPasadas = 0;
let pruebasFalladas = 0;
let listaFallos = [];

function probar(descripcion, obtenido, esperado) {
    const exito = JSON.stringify(obtenido) === JSON.stringify(esperado);

    console.assert(exito, `Fallo en "${descripcion}" -> Esperado: ${esperado} | Obtenido: ${obtenido}`);

    if (exito) {
        pruebasPasadas++;
    } else {
        pruebasFalladas++;
        listaFallos.push(`Fallo: ${descripcion} (Esperado: ${esperado}, Obtenido: ${obtenido})`);
    }
}

function ejecutarTodasLasPruebas() {
    pruebasPasadas = 0;
    pruebasFalladas = 0;
    listaFallos = [];
    console.clear();

    probar("IVA caso normal (100 al 21%)", calcularIVA(100), 21);
    probar("IVA caso límite (precio 0)", calcularIVA(0, 21), 0);
    probar("Descuento caso normal (80 al 25%)", aplicardescuento(80, 25), 60);
    probar("Descuento caso límite (0% descuento)", aplicardescuento(80, 0), 80);
    probar("Formatear euros normal", formatear(1234.5), "1234,50 €");
    probar("Formatear euros límite (0)", formatear(0), "0,00 €");

    probar("Temperatura normal (100 C a F)", convertirTemperatura(100, "C", "F"), 212);
    probar("Temperatura límite (misma unidad C a C)", convertirTemperatura(25, "C", "C"), 25);
    probar("Temperatura límite (congelación 32 F a C)", convertirTemperatura(32, "F", "C"), 0);

    probar("Evaluar contraseña normal (fuerte)", evaluarContrasena("Abcdefg1"), "fuerte");
    probar("Evaluar contraseña límite (vacía)", evaluarContrasena(""), "débil");
    probar("Evaluar contraseña límite (7 caracteres con todo)", evaluarContrasena("Abcde12"), "media");

    probar("Generar contraseña límite (longitud 3 inválida)", generarContraseña(3), null);
    probar("Generar contraseña límite (longitud 35 inválida)", generarContraseña(35), null);

    for (let i = 1; i <= 20; i++) {
        const passAleatoria = generarContraseña(12);
        const longitudObtenida = passAleatoria ? passAleatoria.length : 0;
        probar(`Generador longitud 12 (iteración ${i}/20)`, longitudObtenida, 12);
    }

    probar("Contar palabras normal", contarPalabras("El perro rápido"), 3);
    probar("Contar palabras límite (texto vacío)", contarPalabras(""), 0);
    probar("Contar palabras límite (solo espacios)", contarPalabras("     "), 0);
    probar("Minutos lectura normal", minutosLectura("hola"), 1);
    probar("Minutos lectura límite (vacío)", minutosLectura(""), 0);

    const cajaPruebas = document.getElementById("res-pruebas");
    const total = pruebasPasadas + pruebasFalladas;
    
    let resumen = `Pasan: ${pruebasPasadas} de ${total} pruebas.\n`;
    
    if (pruebasFalladas > 0) {
        resumen += `Fallan: ${pruebasFalladas}\n\nDetalle de fallos:\n` + listaFallos.join("\n");
        cajaPruebas.style.color = "#f87171";
    } else {
        resumen += "Todos los tests han pasado correctamente.";
        cajaPruebas.style.color = "#4ade80";
    }

    cajaPruebas.textContent = resumen;
}

document.getElementById("btn-pruebas").addEventListener("click", ejecutarTodasLasPruebas);