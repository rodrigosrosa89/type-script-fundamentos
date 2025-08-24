type Idade = number | string;

function exibirPessoa(nome: string, idade: Idade): string {
    console.log(`O nome é ${nome} e a idade é ${idade}`);
    return `Nome: ${nome}, Idade: ${idade}`;
}

function exibirAnimal(nome: string, especie: string, idade: Idade): void {
    console.log(`O nome do animal é ${nome}, a espécie é ${especie} e a idade é ${idade}`);
}

exibirPessoa('Maria', 9)
exibirAnimal('Rex', 'Cachorro', 5)

function showStatus(status: number | boolean) {
    if (typeof status === 'number') {
        console.log(`O status é ${status}`);
        console.log(status.toExponential(2))
    } else if (typeof status === 'boolean') {
        console.log('O status é ' + (status ? 'Ativo' : 'Inativo'));
    }

}

showStatus(4)

type PessoaFisica = {
    nome: string;
    cpf: string
}

type PessoaJuridica = {
    nome: string;
    cnpj: string
}

const pf: PessoaFisica = {
    nome: 'João',
    cpf: '123.456.789-00'
}

const pj: PessoaJuridica = {
    nome: 'Empresa X',
    cnpj: '12.345.678/0001-00'
}

function showPessoa(pessoa: PessoaFisica | PessoaJuridica): void {
    console.log(`Nome: ${pessoa.nome}`);
    if ((pessoa as PessoaFisica).cpf || 'cpf' in pessoa) {
        console.log(`CPF: ${(pessoa as PessoaFisica).cpf}`);
    } else {
        console.log(`CNPJ: ${pessoa.cnpj}`);
    }
}