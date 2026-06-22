import readline from "input.js";

var idade = await input("Digite a idade: ");

if (idade >= 18) {
    console.log("Aluno maior (>) de idade.");
}
else {
    console.log("Aluno menor (<) de idade."); 
}