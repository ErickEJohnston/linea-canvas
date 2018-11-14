var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
{
  var lineas = parseInt(texto.value);
  var l = 0;
  var yi, xf;
  var colouur = "gray";
  var colouur2 = "red";
  var colouur3 = "orange";
  var colouur4 = "blue";
  var espacio = ancho / lineas;
  var xi, yf;

  do
  {
    xf = espacio * ( l + 1 )
    yi = l * espacio

    dibujarLinea (colouur, 150, 0, xf, 150)
  	dibujarLinea (colouur, 150, 300, xf, 150)
  	dibujarLinea (colouur, 150, 300, xf, 150)
  	dibujarLinea (colouur, 0, 150, 150, yi)
  	dibujarLinea (colouur, 300, 150, 150, yi)

    l++;
  }
  while (l < lineas);

}
