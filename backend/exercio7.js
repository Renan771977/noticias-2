import input from "../backend/input.js";

function inverter(palavra) {
    var resultado = palavra.split("").reverse().join("");
    return resultado;
}

var palavra = await input("Digite uma palavra: ");
console.log(palavra);

palavra = palavra.split('');
console.log(palavra);

palavra = palavra.reverse();
console.log(palavra);

palavra = palavra.join('');
console.log(palavra);

palavra = inverter(palavra);
console.log(palavra);
