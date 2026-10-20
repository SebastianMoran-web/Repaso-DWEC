| Linea | Predicción | Resultado | Tipo de dato |
|---|---|---|---|
| 1 | Transformara el parametro al tipo de dato Int | Lo tranforma en una dato Int | Int |
| 2 | Se queda solamente el 12 y se trnasforma en un dato Int | Se queda con el 12 y s econvierte en Int | Int
| 3 | Se queda solamente el 12 y se trnasforma en un dato Int | Sale Null | Int |
| 4 | Sale un error | Sale error porque Number no es una opcióon | Ninguno |
| 5 | Saldra error | Sale false porque el vacio se le considera 0 | Booleano |
| 6 | Redondea el resultado | Redondea el resultado y se convierte en -2 | Int |
| 7 | Se reemplaza las "o" por "0" | Reemplaza la primera "o" solo | String |
| 8 | Devolvera "abc" | Devulve una lista con los tres elementos separados | Object |
| 9 | Devuelve los dos elementos juntos "0.10.2" | Devuelve la suma de los elementos | Double |
| 10 | Redondea hasta las centesimas | Devuelve el numero redondeado "!.00" | Double |

### 1.Pon las funciones que has visto en grupos: convertir, comprobar, matemáticas y texto

<br>

| Convertir | Comprobar | Matemáticas | Texto |
|---|---|---|---|
| 1,2,3 | 4,5 | 6,9,10 | 7,8 | 

<br>

### 2.Añade 3 funciones más que conozcas.

<br>

0 === "0" (de igualdad), parsefloat() (convertir), let numero = 5, numero++ (de asignación)


<br>

## 1. ¿Qué da Number("")? ¿Por qué es un problema en un formulario?


<br>

Salta un error, porque al ser un error no deja continuar el codigo  con normalidad 

<br>

## 2. ¿Qué diferencia hay entre parseInt("12px") y parseInt("px12")?

<br>

Que se idnetifica primero un tipo de dato, en un número y en el otro una letra, por ende se lee como un Int y un Stirng, por lo que da error en la segunda

<br>

## 3. ¿Por qué 0.1 + 0.2 no da 0.3? ¿Qué problema crearía en una tienda?

<br> 

Porque los ordenadores trabajan en binario y utilizan un estandar que para procesar los números "float", el cual es físicamente incapaz de almacenar ciertos decimales con precisión exacta. Porque la falta de exactitud de decimales arruinarian las transacciones de una compra

<br>

## 1. Con un ejemplo de tu código: ¿qué es un parámetro y qué es un argumento?

Un parametro es un espacio indicado en el codigo que sirve para saber que dato se espera que el usuario dé. Un argumento es un valor dado a un parametro y que se usa para una operación

<br>

## 2. ¿Cuándo se usa un valor por defecto?

Para asegurarse que haya un valor si o si en un parametro, por si el usuario se le olvida enviar un valor a un dato clave y no rompa todo el código

<br>

## 3. ¿Qué pasó con la copia que usaba console.log? ¿Por qué?

La copia de calcularIVA con log se ejecuta correctamente pero cuando se usa en la copia de precioIVA con log luego suelta un resultado "NaN" porque no tiene un return y cuando termina su calculo devuelve un "undefinied"

