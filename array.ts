// Arquivo responsável por array com TS

let array: number[] = [];
array.push(1)
array.push(3)

console.log(`dados do array: ${array}`);

let arrDoisValores: (number | string)[] = [];
arrDoisValores.push(1)
arrDoisValores.push(3)
arrDoisValores.push('Aceita string também!')

console.log(`dados do array dois valores: ${arrDoisValores}`);

type TipoArray = (number | string)[]

let arrayType: TipoArray = [1, 2, 3, 'Array1'];
let arrayTypeDois: TipoArray = [3, 4, 5, 'Array1'];

console.log(arrayType, arrayTypeDois)