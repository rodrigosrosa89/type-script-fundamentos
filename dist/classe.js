"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    nome;
    idade;
    estaVivo;
    constructor(nome) {
        this.nome = nome;
        this.idade = 0;
        this.estaVivo = true;
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
let cachorro = new Animal("Cachorro1");
cachorro.nascer();
cachorro.crescer();
cachorro.morrer();
var Terrestres;
(function (Terrestres) {
    class Cachorro extends Animal {
        correr() {
            console.log(`O ${this.nome}, correu!`);
        }
    }
    Terrestres.Cachorro = Cachorro;
    Terrestres.cachorro = new Cachorro("Robertinho");
})(Terrestres || (Terrestres = {}));
var Marinhos;
(function (Marinhos) {
    class Golfinho extends Animal {
        nadar() {
            console.log(`O ${this.nome}, nadou!`);
        }
    }
    Marinhos.Golfinho = Golfinho;
    Marinhos.golfinho = new Golfinho("Dolphin");
    // golfinho.nadar();
})(Marinhos || (Marinhos = {}));
Terrestres.cachorro.correr();
Marinhos.golfinho.nadar();
//# sourceMappingURL=classe.js.map