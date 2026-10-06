-- Atualizar preço e estoque de dois itens
-- 1. Atualizar preço do Notebook Gamer para R$3.600,00 e estoque para 10
UPDATE products SET price = 3600.00, stock = 10 WHERE id = 1;

-- 2. Atualizar preço da Camiseta Básica para R$50,00 e estoque para 90
UPDATE products SET price = 50.00, stock = 90 WHERE id = 3;