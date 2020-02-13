function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var numero;

	numero = Math.floor(Math.random()*10)+1;

	if (numero >= 9){
		alert("EXCELENTE, APROBÓ. NOTA: " + numero);
	}
	else if (numero >= 4) {
		alert("APROBÓ. NOTA: " + numero);
	}
	else {
		alert("NOTA: " + numero + ". Vamos, la proxima se puede");	
	}
}//FIN DE LA FUNCIÓN