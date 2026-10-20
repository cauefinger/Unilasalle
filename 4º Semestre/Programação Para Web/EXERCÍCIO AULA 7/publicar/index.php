<?php require 'config.php'; ?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TechStore - Loja de Tecnologia</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="<?php echo $base_url; ?>/src/style.css" rel="stylesheet">
</head>
<body class="bg-light">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <div class="container">
            <a class="navbar-brand" href="#">TechStore</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Início</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Produtos</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <div class="container">
        <div class="mb-4">
            <h1>Produtos TechStore</h1>
            <input type="text" id="searchInput" class="form-control" placeholder="Buscar por nome ou categoria...">
        </div>
        
        <div class="row row-cols-1 row-cols-md-3 g-4" id="productsContainer">
            <?php
            $stmt = $pdo->query("SELECT p.*, c.name as category_name FROM products p JOIN categories c ON p.category_id = c.id");
            $products = $stmt->fetchAll();
            
            if (empty($products)) {
                echo '<div class="col-12"><div class="alert alert-info">Nenhum produto cadastrado.</div></div>';
            } else {
                foreach ($products as $product) {
                echo '
                <div class="col">
                    <div class="card h-100">
                        <img src="'. $product['image_url'] .'" class="card-img-top" alt="'. htmlspecialchars($product['name']) .' " style="height: 200px; object-fit: cover;">
                        <div class="card-body">
                            <h5 class="card-title">'. htmlspecialchars($product['name']) .'</h5>
                            <p class="card-text">'. substr(htmlspecialchars($product['description']), 0, 80) .'...</p>
                            <p class="card-text"><strong>R$ '. number_format($product['price'], 2, ',', '.') .'</strong></p>
                            <p class="card-text">Estoque: '. $product['stock'] .'</p>
                            <small class="text-muted">Categoria: '. htmlspecialchars($product['category_name']) .'</small>
                        </div>
                    </div>
                </div>';
                }
            }
            ?>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
    <script>
        const searchInput = document.getElementById('searchInput');
        const products = document.querySelectorAll('.card');
        
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            
            products.forEach(product => {
                const name = product.querySelector('h5').innerText.toLowerCase();
                const category = product.querySelector('small').innerText.toLowerCase();
                
                const col = product.closest('.col');
                
                if (name.includes(term) || category.includes(term)) {
                    col.style.display = '';
                } else {
                    col.style.display = 'none';
                }
            });
        });
    </script>
</body>
</html>