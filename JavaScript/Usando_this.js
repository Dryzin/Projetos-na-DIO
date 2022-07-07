function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
	nome: 'Carlos',
	idade: 33,
};

const pessoa2 = {
	nome: 'Maria',
	idade: 26,
};

const pessoa3 = {
	nome: 'Lucas',
	idade: 3,
};

const animal = {
    nome: 'Fiona',
    idade: 5,
    raca: 'Pub',
};

console.log(calculaIdade.call(animal, 4));
console.log(calculaIdade.apply(pessoa3, [24]));