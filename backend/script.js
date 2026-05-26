function area_circulo(raio) {
    const PI = 3.14159;
    var area = PI * (raio**2);
    return area
}

function area_retangulo(base, altura) {
    var area = base * altura;
    return area
}

console.log(area_circulo(5));
console.log(area_retangulo(10, 5));

let raio = 5;
console.log(area_circulo(raio));
console.log(area);