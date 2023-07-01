from interpreter import draw
from chessPictures import *

imagen = square

for k in range(7):
    if (k%2 ==0):
        imagen = imagen.join(square.negative())
    else:
        imagen = imagen.join(square)


linea = square 
for k in range(7):
    if (k%2 ==0):
        linea = linea.join(square.negative())
    else:
        linea = linea.join(square)



for a in range(3):
    if (a%2 ==0):
        imagen = imagen.up(linea.horizontalMirror())
    else:
        imagen = imagen.up(linea)
draw(imagen)