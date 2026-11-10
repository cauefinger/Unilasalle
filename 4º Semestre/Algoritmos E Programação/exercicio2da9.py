matriz = []
contador2 = 0

for linha in range(10):
    linha_atual = []

    for coluna in range(10):
        contador2 += 1
        linha_atual.append(contador2)

    matriz.append(linha_atual)

for linha in matriz:
    for coluna in linha:
        print(coluna, end=" ")
    print()