
import { useState } from "react";


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


function ProdutoCard({ produto, adicionarCarrinho }) {

    const [favorito, setFavorito] = useState(false);

    function alternarFavorito() {
        setFavorito(!favorito);
    }

    return (
        <div className="col-12 col-md-6 col-xl-4">

            <div className="card">

                <div className="card-body">

                    <h5 className="card-title">
                        {produto.nome}
                    </h5>

                    <p className="card-text">
                        R$ {produto.preco.toFixed(2)}
                    </p>

                    <button
                        className={`btn ${
                            favorito
                                ? "btn-danger"
                                : "btn-outline-danger"
                        } mb-2`}
                        onClick={alternarFavorito}
                    >
                        {favorito ? "♥ Favorito" : "♡ Favoritar"}
                    </button>

                    <button
                        className="btn btn-primary"
                        onClick={adicionarCarrinho}
                    >
                        Adicionar
                    </button>

                </div>

            </div>

        </div>
    );
}


function App() {

    const [quantidadeCarrinho, setQuantidadeCarrinho] = useState(0);

    function adicionarCarrinho() {

        setQuantidadeCarrinho(quantidadeCarrinho + 1);

        alert("Produto adicionado ao carrinho!");

    }

    return (
        <>
            <nav className="navbar navbar-dark bg-dark">

                <div className="container">

                    <a className="navbar-brand" href="#">
                        Minha Loja
                    </a>

                    <button className="btn btn-light">
                        🛒 Carrinho{" "}
                        <span className="badge bg-danger">
                            {quantidadeCarrinho}
                        </span>
                    </button>

                </div>

            </nav>


            <div className="container mt-4">

                <h1 className="text-center mb-4">
                    Produtos
                </h1>

                <div className="row g-4">

                    {produtos.map((produto) => (

                        <ProdutoCard
                            key={produto.nome}
                            produto={produto}
                            adicionarCarrinho={adicionarCarrinho}
                        />

                    ))}

                </div>

            </div>
        </>
    );
}

export default App;