const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um numero para ver a tabuada: ', (input) => {
  const numero = Number(input.replace(',', '.'));

  if (Number.isNaN(numero)) {
    console.log('Por favor, digite um numero valido.');
    rl.close();
    return;
  }

  console.log(`Tabuada do ${numero}:`);
  for (let i = 1; i <= 10; i += 1) {
    const resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
  }

  rl.close();
});
