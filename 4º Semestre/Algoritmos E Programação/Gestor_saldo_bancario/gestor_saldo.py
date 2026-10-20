saldo = 0.0


def depositar(valor):
    global saldo
    saldo += valor


def sacar(valor):
    global saldo
    saldo -= valor


def verificar_situacao():
    if saldo >= 0:
        return "Positivo"
    return "Negativo"


def main():
    while True:
        print("\n=== Gestor de Saldo Bancário ===")
        print(f"Saldo atual: R$ {saldo:.2f} ({verificar_situacao()})")
        print("1 - Depositar")
        print("2 - Sacar")
        print("0 - Sair")
        opcao = input("Escolha uma opção: ")

        if opcao == "0":
            print("Encerrando o programa.")
            break
        elif opcao in ("1", "2"):
            try:
                valor = float(input("Valor: R$ ").replace(",", "."))
            except ValueError:
                print("Valor inválido.")
                continue
            if valor <= 0:
                print("O valor deve ser positivo.")
            elif opcao == "1":
                depositar(valor)
            else:
                sacar(valor)
        else:
            print("Opção inválida.")


if __name__ == "__main__":
    main()
