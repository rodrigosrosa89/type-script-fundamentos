"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function checarProdutoStatus(status) {
    switch (status) {
        case ProdutoStatus.Ativo: {
            console.log("Produto disponível");
            break;
        }
        case ProdutoStatus.Inativo: {
            console.log("Produto não encontrado");
            break;
        }
        default: {
            console.log("Produto aguardando estoque");
            break;
        }
    }
}
var ProdutoStatus;
(function (ProdutoStatus) {
    ProdutoStatus[ProdutoStatus["Ativo"] = 1] = "Ativo";
    ProdutoStatus[ProdutoStatus["Inativo"] = 2] = "Inativo";
    ProdutoStatus[ProdutoStatus["Indisponivel"] = 3] = "Indisponivel";
})(ProdutoStatus || (ProdutoStatus = {}));
checarProdutoStatus(ProdutoStatus.Ativo);
checarProdutoStatus(ProdutoStatus.Inativo);
checarProdutoStatus(ProdutoStatus.Indisponivel);
//# sourceMappingURL=produto.js.map