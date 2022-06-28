// Numero maximo
var max = 100;

//Numero minimo 
var min = 1;

//Numero aleatorio
var numero_secreto = Math.random() * (max - min) + min;
numero_secreto = parseInt(numero_secreto);

console.log(numero_secreto);

var mensaje = "Ingresa un numero para adivinar el numero secreto"

while (true) {
    var numero_del_usuario = prompt(mensaje, "0");

    numero_del_usuario = parseInt(numero_del_usuario);

    if (numero_del_usuario === numero_secreto) {
        alert("Ganaste!! Adivinaste el numero secreto");
        break;
    }
    else if (numero_del_usuario === 0) {
        break;
    }
    else if (numero_del_usuario > numero_secreto) {
        mensaje = "lo sentimos, el numero que ingresaste es mayor al numero secreto";
    }
    else if (numero_del_usuario < numero_secreto) {
        mensaje = "lo sentimos, el numero que ingresaste es menor al numero secreto";
    }
}