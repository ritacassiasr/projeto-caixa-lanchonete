class Menu {
    constructor() {
        this.itens = {
            cafe: { descricao: "Café", valor: 3.00 },
            chantily: { descricao: "Chantily (extra do Café)", valor: 1.50 },
            suco: { descricao: "Suco Natural", valor: 6.20 },
            sanduiche: { descricao: "Sanduíche", valor: 6.50 },
            queijo: { descricao: "Queijo (extra do Sanduíche)", valor: 2.00 },
            salgado: { descricao: "Salgado", valor: 7.25 },
            combo1: { descricao: "Suco e 1 Sanduíche", valor: 9.50 },
            combo2: { descricao: "Café e 1 Sanduíche", valor: 7.50 }
        };

        this.extras = {
            chantily: "cafe",
            queijo: "sanduiche"
        };
    }

    getItem(codigo) {
        return this.itens[codigo] || null;
    }

    isExtra(codigo) {
        return !!this.extras[codigo];
    }

    getPrincipalForExtra(codigo) {
        return this.extras[codigo];
    }
}

export { Menu }