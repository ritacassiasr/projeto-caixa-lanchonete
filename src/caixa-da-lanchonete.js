import { Menu } from "./menu";

class CaixaDaLanchonete {
    constructor() {
        this.menu = new Menu();
    }
    
    calcularValorDaCompra(metodoDePagamento, itens) {
        let total = o;

        if(itens.length === 0) return "Não há itens no carrinho de compra!"
        if(!['debito', 'credito','dinheiro'].includes(metodoDePagamento)) return "Forma de pagamento inválida!";
    }

}

export { CaixaDaLanchonete };
