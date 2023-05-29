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
        const aux = eval(operacion);
        operacion=aux.toString();
        resultado.value=operacion;

    }catch(error){
    resultado.value="Error";
    }
}