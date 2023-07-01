
from colors import *
class Picture:
  def __init__(self, img):
    self.img = img;

  def __eq__(self, other):
    return self.img == other.img

  def _invColor(self, color):
    if color not in inverter:
      return color
    return inverter[color]

  def verticalMirror(self):
    """ Devuelve el espejo vertical de la imagen """
    vertical = []
    for value in self.img:
      vertical.append(value[::-1])
    return Picture(vertical)

  def horizontalMirror(self):
    """ Devuelve el espejo horizontal de la imagen """
    
    horizontal = []
    for valor in self.img:
      linea=''
      for caracter in valor:
        linea=caracter+linea
      horizontal.append(linea)
    return Picture(horizontal)

  def negative(self):
    """ Devuelve un negativo de la imagen """
    negativo=[]

    for value in self.img:
      linea=''
      for caracter in value:
        linea = linea+self._invColor(caracter)
      negativo.append(linea)

    return Picture(negativo)

  def join(self, p):
    """ Devuelve una nueva figura poniendo la figura del argumento 
        al lado derecho de la figura actual """
    ingreso = []
    for value in range(len(self.img)):
      ingreso.append(str(self.img[value])+str(p.img[value]))

    return Picture(ingreso)

  def up(self, p):
    arriba = self.img
    for value in range(len(p.img)):
      arriba.append(p.img[value])
    return Picture(arriba)

  def under(self, p):
    """ Devuelve una nueva figura poniendo la figura p sobre la
        figura actual """
    return Picture(None)
  
  def horizontalRepeat(self, n):
    """ Devuelve una nueva figura repitiendo la figura actual al costado
        la cantidad de veces que indique el valor de n """
    imagen = []
     
    for linea in self.img:
      parte = ""
      for i in range (n):
        parte = parte + linea
      imagen.append(parte)

    return Picture(imagen)

  def verticalRepeat(self, n):
    return Picture(None)

  #Extra: Sólo para realmente viciosos 
  def rotate(self):
    """Devuelve una figura rotada en 90 grados, puede ser en sentido horario
    o antihorario"""
    return Picture(None)

