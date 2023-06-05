
//1. Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en caso de contestar sí, responder “Ciertamente”, en caso de contestar no, responder: “No te creo”.
/*
    console.log('Inicia programa')
    let belleza = prompt('¿Eres Bellísimo/a?')
    belleza = belleza.toLowerCase()
    console.log (belleza)
    if (belleza=='si') {
        alert('Ciertamente')
    } else if (belleza=='no') {
        alert('No te creo')
    } else {
        alert('Si estás respodiendo otra pregunta, igual creo que eres bellísimo/a')
}
*/

//2. Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm no es divisible entre 2”.
/*
    const numero = parseInt(prompt("Ingrese un número:"));
    if (numero % 2 === 0) {
        alert(numero + " es divisible entre 2");
    } else {
        alert(numero + " no es divisible entre 2");
    }
*/

//3. Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en un Alert.
/*
    const numero = parseInt(prompt("Ingrese un número:"));
    if (numero % 2 === 0) {
        alert (numero + " es par");
    } else {
        alert (numero + " no es par");
    }
*/

//4. Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir 'Ganaste un premio', en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.
/*
    let numeroCliente = parseInt(prompt("Ingrese un número de cliente:"));
    if (numeroCliente === 1000) {
        alert ("¡Ganaste un premio! Felicitaciones");
    } else {
        alert ("Lo sentimos, sigue participando");
    }
*/

//5. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales.
/*
    let numero1 = parseInt(prompt("Ingrese el primer número:"));
    let numero2 = parseInt(prompt("Ingrese el segundo número:"));
    if (numero1 < numero2) {
    alert (numero1 + " es menor que " + numero2);
    } else {
    alert (numero2 + " es menor que " + numero1);
    }
*/


//6. Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales.
/*
    let numero1 = parseInt(prompt("Ingrese el primer número:"));
    let numero2 = parseInt(prompt("Ingrese el segundo número:"));
    let numero3 = parseInt(prompt("Ingrese el tercer número:"));

    if (numero1 > numero2 && numero1 > numero3) {
        alert(numero1 + " es el número mayor");
    } else if (numero2 > numero1 && numero2 > numero3) {
        alert(numero2 + " es el número mayor");
    } else if (numero3 > numero1 && numero3 > numero2) {
        alert(numero3 + " es el número mayor");
    } else {
        alert("Hay números iguales");
    }
*/

//7. Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.
/*
let diaSemana = prompt("Ingrese un día de la semana:");

if (diaSemana.toLowerCase() === "lunes") {
    alert("Hoy es lunes,  <<Dime y lo olvido, enseñame y lo recuerdo, involúcrame y lo aprendo>> (Benjamin Fraklin)");
} else if (diaSemana.toLowerCase() === "martes") {
    alert("Hoy es martes, <<Lo que con mucho trabajo se obtiene, más se ama>> (Aristóteles)");
} else if (diaSemana.toLowerCase() === "miércoles") {
    alert("Hoy es miércoles, <<Hay una fuerza motriz más poderosa que el vapor, la electricidad y la energía atómica: la voluntas>> (Albert Einstein)");
} else if (diaSemana.toLowerCase()==="jueves") {
    alert("Hoy es Jueves, <<Nuestra mayor debilidad reside en rendirnos. La forma más segura de tener éxito es intentarlo una vez más>> (Thomas A. Edison)");
} else if (diaSemana.toLowerCase() === "viernes"){
    alert("Hoy es Viernes,<<La mentes es como un paracaídas solo funciona si se abre>> (Albert Einstein")
} else if (diaSemana.toLowerCase() === "sábado" || diaSemana.toLowerCase() === "domingo") {
    alert("Es fin de semana <<Vive como si fueses a morir mañana. Aprende como si fueses a vivir siempre>> (Mahatma Gandhi)");
} else {
prompt("Ingrese un día de la semana");
}
*/

//8. Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en ese rango, si no lo está imprima un mensaje de error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10.
/*
let calificacion = parseInt(prompt('Ingresa tu calificación')) 
console.log(typeof(calificacion))

if (calificacion > 10 || calificacion < 1){
    alert('Eso no sirve, intenta un valor entre 1 y 10')
}else if(calificacion < 6){
    alert ('reprobado, a estudiar por menso')
}else if (calificacion >= 6 && calificacion <= 8){
    alert('Siempre se puede mejorar')
}else if (calificacion === 9){
    alert ('Muy bien, pero no es perfecto')
}else if (calificacion === 10){
    alert ('Se cree mucho')
}else {
    alert('La calificación ingresada no está en el rango válido')
}
*/

//Ejercicio 9 (Compra de Helado)

const topping = prompt("Seleccione un topping: oreo, KitKat o brownie");
let precioTotal = 50;

switch (topping.toLowerCase()) {
    case "oreo":
        precioTotal += 10;
        break;
    case "kitkat":
        precioTotal += 15;
        break;
    case "brownie":
        precioTotal += 20;
        break;
    default:
    alert ("No tenemos este topping, lo sentimos. El precio del helado sin topping es: " + precioTotal + " MXN");
}
alert ("El precio del helado es: " + precioTotal + " MXN");


//Ejercicio 10 (Beca).
/*
const nivel = prompt("Seleccione el nivel: Course, Carrera o Master");
const mensualidad = {
    Course: 4999,
    Carrera: 3999,
    Master: 2999
};

const duracion = {
    Course: 2,
    Carrera: 6,
    Master: 12
};

const beca = prompt("¿Cuenta con alguna beca? (Facebook, Google, Jesua)");

if (beca.toLowerCase() === "facebook") {
  mensualidad[nivel] *= 0.8;
} else if (beca.toLowerCase() === "google") {
  mensualidad[nivel] *= 0.85;
} else if (beca.toLowerCase() === "jesua") {
  mensualidad[nivel] *= 0.5;
}

const precioTotal = mensualidad[nivel] * duracion[nivel];

alert ("El precio mensual con descuento es: " + mensualidad[nivel] + " MXN");
alert ("El precio total por el curso elegido es: " + precioTotal + " MXN");
*/



//Ejercicio 11 (Uber). 
/*
const vehiculo = prompt("Ingrese el tipo de vehículo (coche, moto, autobús):");
const distancia = parseInt(prompt("Ingrese la distancia recorrida (en kilómetros):"));
const litrosConsumidos = parseInt(prompt("Ingrese la cantidad de litros consumidos:"));
let precioKilometro, costoTotal;

switch (vehiculo.toLowerCase()) {
    case "coche":
        precioKilometro = 0.20;
        break;
    case "moto":
        precioKilometro = 0.10;
        break;
    case "autobús":
        precioKilometro = 0.5;
        break;
    default:
        alert ("Tipo de vehículo no válido");
}

if (litrosConsumidos <= 100) {
  costoTotal = (precioKilometro * distancia) + 5;
} else {
  costoTotal = (precioKilometro * distancia) + 10;
}

alert ("El total a pagar es: " + costoTotal);
*/

