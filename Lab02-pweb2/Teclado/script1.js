
var codigoInput = document.getElementById("codigoInput");
var enter = document.getElementById("enter");
var botones = document.getElementsByClassName("botones");


Array.from(botones).forEach(function(botones) {
    botones.addEventListener("click", function() {
      codigoInput.value += botones.innerText;
    });
});
//






