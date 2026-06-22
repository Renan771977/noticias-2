import input from "./input";

var num_a = Number(await input("Digite o primeiro numero: "));
var num_b = Number(await input("Digite o segundo numero: "));

if (num_a > num_b) {
    console.log("O numero " + num_a + " é maior (>) que o numero " + num_b);
} else if (num_b > num_a) {
    console.log("O numero " + num_b + " é maior (>) que o numero " + num_a);
} else {
    console.log("Os numeros são iguais");
}   