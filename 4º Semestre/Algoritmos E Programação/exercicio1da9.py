
matriz = []
soma = 0

for linha in range(7):
    linha_atual = []

    for coluna in range(9):
        numero = int(input("Digite um número: "))
        linha_atual.append(numero)
        soma += numero

    matriz.append(linha_atual)

print("\nMatriz:")

for linha in matriz:
    for numero in linha:
        print(numero, end=" ")
    print()

print("\nSoma dos elementos:", soma)
