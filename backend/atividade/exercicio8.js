import input from "../backend/input.js";

function contar_vogais(palavra) {
    const vogais = ['a', 'e', 'i', 'o', 'u'];

    var contador = 0;

    for (var letra of palavra) {
        if (vogais.includes(letra)) {
            contador+= 1;
        }
    }
    return contador;
}

var palavra = await input("Digite uma palavra: ");
console.log(contar_vogais(palavra));