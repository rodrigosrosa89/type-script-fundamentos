"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let cachorro = {
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
//# sourceMappingURL=interface.js.map