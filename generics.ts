class Pessoa<I> {
    idade: I;

    constructor(idade: I) {
        this.idade = idade;
    }

    setIdade(idade: I): void {       
        this.idade = idade;
    }
    
}

let pessoa = new Pessoa(5);
console.log(pessoa.idade);

console.log(pessoa.idade);

class PessoaGenericHeranca<I extends number | string> {
    idade: I;

    constructor(idade: I) {
        this.idade = idade;
    }

    setIdade(idade: I): void {       
        this.idade = idade;
    }
    
}

let pessoaGenericHeranca = new PessoaGenericHeranca(5);
console.log("Idade generics ", pessoaGenericHeranca.idade);


let carros = ['Polo', 'T-Cross', 'Nivus'];

function pegarPrimeiroElemento<T>(lista: T[]): any {
    return lista[0];
}

console.log('Primeiro elemento da lista: ', pegarPrimeiroElemento(carros));
console.log('Primeiro elemento da lista: ', pegarPrimeiroElemento<string>(carros));



