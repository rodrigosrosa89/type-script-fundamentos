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

let array: number[] = [];
array.push(1)
array.push(3)

console.log(`dados do array: ${array}`);

let arrDoisValores: (number | string)[] = [];
arrDoisValores.push(1)
arrDoisValores.push(3)
arrDoisValores.push('Aceita string também!')

console.log(`dados do array dois valores: ${arrDoisValores}`);