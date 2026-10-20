# Sistema de Controle de Estoque

quantidade_produtos = int(input("Quantos produtos serão cadastrados? "))

soma_geral = 0

for i in range(quantidade_produtos):

    print(f"\nProduto {i + 1}")

    nome = input("Nome do produto: ")
    preco = float(input("Preço unitário: R$ "))
    quantidade = int(input("Quantidade em estoque: "))

    valor_total = preco * quantidade

    print(f"Valor total do item: R$ {valor_total:.2f}")

    if valor_total > 1000:
        print("Estoque de Alto Valor")

    soma_geral += valor_total

print(f"\nSoma Geral do estoque: R$ {soma_geral:.2f}")
