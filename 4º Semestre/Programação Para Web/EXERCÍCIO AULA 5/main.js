const carrinho = [

    {nome: "Camiseta polo", preco: 89.90, quantidade: 2},
    {nome: "Camiseta social", preco: 223.90, quantidade: 1},
    {nome: "Camiseta casual", preco: 59.90, quantidade: 1},
    {nome: "Calça esportiva", preco: 110.99, quantidade: 2}

];

function exibirItens(carrinho) {
    for (const item of carrinho) {

        const subtotal = item.preco * item.quantidade;

        console.log(`Produto: ${item.nome}`);
        console.log(`Quantidade: ${item.quantidade}`);
        console.log(`Subtotal: R$ ${subtotal.toFixed(2)}`);
        console.log("------------------------");
    }
}


const calcularTotal = (carrinho) => {

    let valorTotal = 0;

    for (const item of carrinho) {

        const subtotal = item.preco * item.quantidade;

        valorTotal = valorTotal + subtotal;

    }
    return valorTotal;
};

function aplicarCupom(valorTotal, cupom) {

    switch (cupom) {

        case "DESCONTO10":

            return valorTotal - (valorTotal * 0.10);


        case "MEGADESCONTO":

            return valorTotal - (valorTotal * 0.20);


        default:

            if (cupom) {

                console.log("Cupom inválido.");

            }

            return valorTotal;
    }
}


exibirItens(carrinho);

const valorTotal = calcularTotal(carrinho);

console.log(`Valor total bruto: R$ ${valorTotal.toFixed(2)}`);

const cupom = "DESCONTO10";

const valorFinal = aplicarCupom(valorTotal, cupom);

console.log(`Valor final a pagar: R$ ${valorFinal.toFixed(2)}`);

