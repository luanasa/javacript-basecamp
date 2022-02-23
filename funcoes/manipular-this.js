function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
	nome: 'Lua',
	idade: 23,
};

const pessoa2 = {
	nome: 'Laura',
	idade: 20,
};

const pessoa3 = {
	nome: 'Lucas',
	idade: 13,
};

console.log(calculaIdade.call(pessoa3, 80));
console.log(calculaIdade.apply(pessoa2, [44]));