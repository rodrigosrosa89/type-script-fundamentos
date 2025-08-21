type Animal = {
    nome: string;
    idade?: number
}

let cachorro : Animal = {
    nome: 'Rosa Maria',
    idade: 5
}

console.log('O cachorro é :', cachorro.nome);
console.log('O cachorro tem idade :', cachorro.idade);