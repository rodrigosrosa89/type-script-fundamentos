function checarProdutoStatus(status: number) {
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

enum ProdutoStatus {
  Ativo = 1,
  Inativo = 2,
  Indisponivel = 3,
}

checarProdutoStatus(ProdutoStatus.Ativo)
checarProdutoStatus(ProdutoStatus.Inativo)
checarProdutoStatus(ProdutoStatus.Indisponivel)
