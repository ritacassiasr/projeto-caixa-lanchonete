import { Menu } from "./menu";

class CaixaDaLanchonete {
  constructor() {
    this.menu = new Menu();
  }

  calcularValorDaCompra(formaDePagamento, itens) {
    let total = 0;

    if (itens.length === 0) return "Não há itens no carrinho de compra!";
    if (!["debito", "credito", "dinheiro"].includes(formaDePagamento))
      return "Forma de pagamento inválida!";

    for (let item of itens) {
      const [codigo, quantidade] = item.split(",");

      const menuItem = this.menu.getItem(codigo);
      if (!menuItem) return "Item inválido!";

      if (Number(quantidade) <= 0) return "Quantidade inválida!";

      if (
        this.menu.isExtra(codigo) &&
        !itens.some((i) => i.startsWith(this.menu.getPrincipalForExtra(codigo)))
      ) {
        return "Item extra não pode ser pedido sem o principal";
      }

      total += menuItem.valor * Number(quantidade);
    }

    if (formaDePagamento === "dinheiro") {
      total *= 0.95;
    } else if (formaDePagamento === "credito") {
      total *= 1.03;
    }

    return `R$ ${total.toFixed(2).replace(".", ",")}`;
  }
}

export { CaixaDaLanchonete };
