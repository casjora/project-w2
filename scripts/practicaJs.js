
// /*
// Pide un numero y muestra:

// Positivo
// Negativo
// es cero

// */

// let numero = parseInt(prompt("Ingresa un numero: "));

// if (numero === 0){
//     alert (`${numero} es 0`)
// }else if (numero < 0){
//     alert (`${numero} es negativo`)
// } else if (numero > 0){
//     alert (`${numero} es positivo`)
// }else {
//     alert ('Ingresa un numero')
// }


// /*
// Pide un numero y muestra:

// Si es par o impar usando modulo

// */

// let num2 = parseInt(prompt("Ingresa un numero: "))

// if(num2%2===0 ){
//     alert (`${num2} es par!!`)

// }else if(num2%2!==0){
//     alert (`${num2} es impar!!!`)
// }else {
//     alert `ingrese un valor valido`
// }

// /*
// Pide una edad y muestra:

// mayor de edad menor de edad

// */

// let edad = parseInt(prompt("Ingresa tu edad: "))

// if (edad >=18){
//     alert (`Tener ${edad} de edad te hace mayor de edad`)
// }else if(edad <18 && edad >=0){
//     alert (`Tener ${edad} de edad te hace menor de edad`)

// } else{
//     alert `${edad} no es un valor valido`
// }


// /* 4. Comparar dos números
 
// Pide dos números y muestra cuál es mayor.
 
// Si son iguales, mostrar “Son iguales”. */

// let num1= parseInt(prompt("Ingresa el primer numero:"))
// let num3 = parseInt(prompt("Ingresa el segundo numero"))

// if (num1===num3){
//     alert `Son iguales`
// }
// else if (num1>num3){
//     alert (`${num1} es mayor que ${num3} papus!`)
// }else if (num3>num1){
//     alert (`${num3} es mayor que ${num1} papus!`)
// }

// else {
//     alert ("Ingresaste valores no validos al menos para un numero")
// }

// /* 5
// Pide dos nums, operaciones:

// suma, resta mult div
// */

let numero1 = Number(prompt("Ingresa el primer numero: "))
let numero2 = Number(prompt("Ingresa el segundo numero: "))

let suma= numero1 + numero2;
let resta= numero1 - numero2;
let mult= numero1 * numero2;
let div= numero1 / numero2;

let operacion = prompt("QUe operacion desea realizar? +, -, *, /")

if (operacion === "+"){
    alert (`La suma de ${numero1} y ${numero2} es ${suma}.`)
} else if (operacion === "-"){
    alert (`La resta de ${numero1} y ${numero2} es ${resta}.`)
}else if (operacion === "*"){
    alert (`La multiplicacion de ${numero1} y ${numero2} es ${mult}.`)
}else if (operacion === "/"){
    alert (`La division de ${numero1} y ${numero2} es ${div.toFixed(2)}.`)
}else {
    alert ('No se ingreso una operacion valida')
}

alert (`
    La suma de ${numero1} y ${numero2} es ${suma}.
    
    La resta de ${numero1} y ${numero2} es ${resta}.
    
    La multiplicacion de ${numero1} y ${numero2} es ${mult}.
    
    La division de ${numero1} y ${numero2} es ${div.toFixed(2)}.`)


/*
6. Descuento en tienda
Si una compra supera 100 soles:
aplicar 10% de descuento
Si supera 200 soles:
aplicar 20%
Mostrar total a pagar.
 
7. Número dentro de rango
Verifica si un número está entre 10 y 50.
Usa &&.
  
*/

//'₷'
let valor = Number(prompt("Ingresa el total : ₷"))

let desc100 = valor *0.1;
let desc200 = valor * 0.2;


if (valor <=100) {
    alert (`El total a pagar es ₷${valor}.`)
}else if (valor > 200){
    alert (`El total a pagar es ₷${valor-desc200}.`)
}else if (valor >100){
    alert (`El total a pagar es ₷${valor - desc100}.`)

}else{
    alert ("Ingrese valores validos")
}

let guess = parseInt(prompt("Ingresa un numero"))

if (guess>=10 && guess <=50){
    alert (`${guess} se encuentra entre 10 y 50`)

} else if (guess <10 || guess>50){
    alert (`${guess} no se encuentra entre 10 y 50`)    
}

else{
    alert ("Ingresa valores validos...")

}