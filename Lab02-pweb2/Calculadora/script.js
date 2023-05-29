let resultado = document.getElementById("resultado");
let operacion = "";

function darValor(valor){
    operacion= operacion+valor;
    resultado.valor = operacion;

}

function limpiar(){
    operacion = "";
    resultado.value="";
}

function darResultado(){

    try{
        resultado = eval(operacion);
        
    }catch(error){
    resultado.value="Error";
    }
}