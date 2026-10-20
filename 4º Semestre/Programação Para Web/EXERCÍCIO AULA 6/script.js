const produtos = [

    {
        nome: "Camiseta polo",
        preco: 89.90
    },

    {
        nome: "Camiseta social",
        preco: 223.90
    },

    {
        nome: "Camiseta casual",
        preco: 59.90
    },

    {
        nome: "Calça esportiva",
        preco: 110.99
    }

];


let quantidadeCarrinho = 0;


function mostrarProdutos() {

    const areaProdutos = document.getElementById("produtos");

    for (const produto of produtos) {

        areaProdutos.innerHTML += `

            <div class="col-12 col-md-6 col-xl-4">

                <div class="card">

                    <div class="card-body">

                        <h5 class="card-title">
                            ${produto.nome}
                        </h5>

                        <p class="card-text">
                            R$ ${produto.preco.toFixed(2)}
                        </p>

                        <button 
                            class="btn btn-primary"
                            onclick="adicionarCarrinho()">
                            Adicionar
                        </button>

                    </div>

                </div>

            </div>

        `;
    }
}


function adicionarCarrinho() {

    quantidadeCarrinho++;

    document.getElementById("contador").textContent = quantidadeCarrinho;

    alert("Produto adicionado ao carrinho!");

}


mostrarProdutos();