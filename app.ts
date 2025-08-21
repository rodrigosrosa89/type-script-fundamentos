let nome: string;
let idade: number;
let isMaiorIdade: boolean;

nome = "Rodrigo";
idade = 36;
isMaiorIdade = true;

console.log(
  `nome: ${nome}, idade: ${idade}, sendo maior de idade: ${isMaiorIdade}`
);

function somar(a: number, b: number): number {
  return a + b;
}

console.log('Soma = ', somar(2, 5));