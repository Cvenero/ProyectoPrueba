let resultado = document.getElementById("resultado");
let operacion = "";

function darValor(value){
    operacion= operacion+value;
    resultado.value = operacion;

}

function limpiar(){
    operacion = "";
    resultado.value="";
}

function darResultado(){

    try{
        var aux = eval(operacion);
        operacion=aux.toString();
        resultado.value=operacion;

    }catch(error){
    resultado.value="Error";
    }
}