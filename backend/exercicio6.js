import input from "../backend/input.js";

var num = Number(await input("Digite um numero: "));


function fatorial(num) {
    var resultado = 1;
    for (var i = num; i > 0; i--) {
        resultado = resultado * i;
    }
    return resultado;
}

var num = Number(await input("Digite um numero: "));
console.log(fatorial(num));