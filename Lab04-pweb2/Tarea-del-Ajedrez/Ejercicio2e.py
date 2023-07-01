from interpreter import draw
from chessPictures import *

imagen = square

for i in range(7):
    if (i%2 ==0):
        imagen = imagen.join(square.negative())
    else:
        imagen = imagen.join(square)

draw(imagen.horizontalMirror())