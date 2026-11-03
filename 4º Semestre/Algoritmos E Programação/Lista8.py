import numpy as np

vetor = np.array([60, 85, 120, 70, 90])

media = 0
volta = 0 

for velocidade in vetor:
    media += velocidade
    volta += 1

    print(f"A média é {media / volta:.2f}")




