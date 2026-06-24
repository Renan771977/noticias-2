class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    acelerar() {
        console.log(`${this.marca} ${this.modelo} está acelerando!`);
    }
}

const meuCarro = new Carro("Toyota", "Corolla", 2020);
meuCarro.acelerar();