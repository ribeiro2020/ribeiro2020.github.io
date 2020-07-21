/*Verifica se o browser é IE */
var eIE = /*@cc_on!@*/false || !!document.documentMode;
var executarLeitura = "S";

if (eIE == true) { // podem ser acrescentadas aqui outras criticas.
	executarLeitura = "N";
}

if (executarLeitura == "S") {
	document.getElementById('falar').addEventListener("click", function(){
		ouvir(document.getElementById("texto").value);
	});

	document.getElementById('falarComentario4').addEventListener("click", function(){
		ouvir(document.getElementById("comentario4").value);
	});
}

	function executar(){
		if (executarLeitura == "S") {
			ouvir(document.getElementById("comentario1").value);
			ouvir(document.getElementById("comentario2").value);
			ouvir(document.getElementById("comentario3").value);
		}
	}

	function ouvir(texto){
		if (executarLeitura == "S") {
			speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
		}
	}
