from interpreter import draw
from chessPictures import *

arriba = knight.join(knight.negative())
abajo = knight.negative().join(knight)
abajo2= abajo.horizontalMirror()

img = arriba.up(abajo2)

draw(img)