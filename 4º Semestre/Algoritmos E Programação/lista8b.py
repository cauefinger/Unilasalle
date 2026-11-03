import numpy as np


media_alunos = np.array([4.5, 7.0, 5.5, 8.5, 9.0, 6.0])

aprovado = 0

for i in media_alunos:

    if i >= 6:
        print(i)
    