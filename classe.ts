import type _interface = require("./interface");

class Animal implements _interface.IAnimal {
  readonly nome: string;
  idade: number;
  estaVivo: boolean;
  
  constructor(nome: string) {
    this.nome = nome;
    this.idade = 0;
    this.estaVivo = true
  }
  nascer() {
    this.estaVivo = true;
    return console.log("Nasceu o animal: ", this.nome);
  }

  crescer() {
    this.idade++;
    return console.log("Idade do animal: ", this.idade);
  }
  morrer() {
    this.estaVivo = false;
    return console.log("Morreu o animal: ", this.nome);
  }
}

let cachorro = new Animal("Cachorro1")
cachorro.nascer();
cachorro.crescer();
cachorro.morrer(); 

namespace Terrestres {
  export class Cachorro extends Animal {
    correr(){
      console.log(`O ${this.nome}, correu!`)
    }
  }

  export let cachorro = new Cachorro("Robertinho"); 
  // cachorro.correr();
}

namespace Marinhos {
  export class Golfinho extends Animal {
    nadar(){
      console.log(`O ${this.nome}, nadou!`)
    }
  }

  export let golfinho = new Golfinho("Dolphin");
  // golfinho.nadar();

}

Terrestres.cachorro.correr();
Marinhos.golfinho.nadar();