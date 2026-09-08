

const carrinho = [
    {nome: "Camiseta polo", preco: 89.90, quantidade: 2}, 
    {nome: "Camiseta social", preco: 223.90, quantidade: 1}, 
    {nome: "Camiseta casual", preco: 59.90, quantidade: 1}, 
    {nome: "Calça esportiva", preco: 110.99, quantidade: 2} 

];

for (const item of carrinho){
    const valor_total = item.quantidade * item.preco;
    console.log(item.nome),
    console.log(item.preco),
    console.log(item.quantidade),
    console.log(valor_total)
}


function Cupom_10(valor_total) {
    let DESCONTO10 = valor_total - (valor_total * 0.10)
    print(`Parabéns! Sua compra recebeu 10% de desconto. Seu valor total é ${DESCONTO10}`)
}

function Cupom_20(valor_total) {
    let DESCONTO20 = valor_total - (valor_total * 0.20)
    print(`Parabéns! Sua compra recebeu 20% de desconto. Seu valor total é ${DESCONTO20}`)
}

function Cupom_default(valor_total) {
    let Cupom_default = valor_total 
    print(`Seu valor total é ${valor_total}`)
}
