// Tipos de datos en JavaScript
// alfanumerico
// let nombrePasajero = "Juan Silva";
// nombrePasajero = "Juan Perez";
// console.log(nombrePasajero);

// numerico
let valorBoleto = 1000;
const impuestoAeropuerto = 100;
const porcentajeTasaEmbarque = 60/100;
var gestionAgencia = 100;
// console.log(valorBoleto);

// logicos (true o false)
let boletoActivo = true;
// console.log(boletoActivo);

// operaciones aritmeticas

// suma
// let totalBoletos = valorBoleto + valorBoleto + porcentajeTasaEmbarque + gestionAgencia;
// console.log(totalBoletos);

// orden de precedencia
//(1) parentesis
//(2) multiplicacion y division
//(3) suma y resta

let totalBoletos2 = (valorBoleto + impuestoAeropuerto) + valorBoleto + impuestoAeropuerto * porcentajeTasaEmbarque + gestionAgencia;
console.log(totalBoletos2);

//Concatenación de texto
let nombrePasajero = "Leonardo";
let apellidoPasajero = "Lacruz";

let nombreCompleto = nombrePasajero + apellidoPasajero;
let pasaporte = parseFloat('1000') + parseInt('12');
let multiplicacion = parseInt('1000') / parseFloat('10');

console.log(nombreCompleto);
console.log(pasaporte);
console.log(multiplicacion);

let noEsUnNumero = parseInt('AASASA');
console.log(noEsUnNumero);