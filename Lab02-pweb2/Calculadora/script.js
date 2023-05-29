let resultado = document.getElementById("resultado");
let operacion = "";

function darValor(valor){
    operacion= operacion+valor;
    resultado.valor = operacion;

}

function limpiar(){
    operacion = "";
    resultado.valor="";
}