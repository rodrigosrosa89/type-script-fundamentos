export interface IAnimal {
  nome: string;
  idade: number;
  estaVivo: boolean;

  nascer(): void;
  crescer(): void;
  morrer(): void;
}

let cachorro: IAnimal = {
  nome: "RosaMaria",
  idade: 0,
  estaVivo: true,

  nascer() {
    this.estaVivo = true;
    return console.log("Nasceu o animal: ", this.nome);
  },

  crescer() {
    this.idade++;
    return console.log("Idade do animal: ", this.idade);
  },
  morrer() {
    this.estaVivo = false;
    return console.log("Morreu o animal: ", this.nome);
  },
};

cachorro.nascer();
cachorro.crescer();