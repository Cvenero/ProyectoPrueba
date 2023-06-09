from interpreter import draw
from chessPictures import *


arriba = knight.join(knight.negative())
abajo = knight.negative().join(knight)

img = arriba.up(abajo)

draw(img)