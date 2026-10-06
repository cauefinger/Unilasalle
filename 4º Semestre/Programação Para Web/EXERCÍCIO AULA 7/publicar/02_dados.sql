INSERT INTO categories (name, description) VALUES
('Eletrônicos', 'Dispositivos eletrônicos e gadgets'),
('Roupas', 'Camisetas, jaquetas e vestuário'),
('Livros', 'Livros de diversos gêneros');

INSERT INTO products (name, description, price, stock, category_id, image_url) VALUES
('Notebook Gamer', 'Notebook com placa de vídeo dedicada', 3500.00, 15, 1, 'https://placehold.co/300x200/e0e0e0/333333?text=Notebook'),
('Smartphone', 'Último modelo de smartphone', 2200.00, 40, 1, 'https://placehold.co/300x200/ff0000/ffffff?text=Smartphone'),
('Camiseta Básica', 'Camiseta de algodão preta', 45.90, 100, 2, 'https://placehold.co/300x200/333333/ffffff?text=Camiseta'),
('Jaqueta de Couro', 'Jaqueta estilo vintage marrom', 299.90, 25, 2, 'https://placehold.co/300x200/cc9966/333333?text=Jaqueta'),
('Livro - Clean Code', 'Livro de programação sobre código limpo', 89.90, 30, 3, 'https://placehold.co/300x200/666666/ffffff?text=Clean+Code'),
('Mouse Gamer', 'Mouse com iluminação RGB', 120.00, 50, 1, 'https://placehold.co/300x200/333333/ffffff?text=Mouse');