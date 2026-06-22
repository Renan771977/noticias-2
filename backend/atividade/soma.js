import input from "../js/input.js"
 
function somar(num_A, num_B) {
    var soma = num_A + num_B;
    return soma;
}
 
var num_A = await input("digite o primeiro numero: ");
var num_B = await input("Digite o segundo numero: ");
 
console.log(somar(num_A, num_B));
 