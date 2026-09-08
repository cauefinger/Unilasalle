

const carrinho = [
    {nome: "Camiseta polo", preco: 89.90, quantidade: 2}, 
    {nome: "Camiseta social", preco: 223.90, quantidade: 1}, 
    {nome: "Camiseta casual", preco: 59.90, quantidade: 1}, 
    {nome: "Calça esportiva", preco: 110.99, quantidade: 2} 

];

for (const item of carrinho){
    console.log (item.nome),
    console.log(item.preco),
    console.log(item.quantidade)
}
