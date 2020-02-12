function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var numero;

	numero = Math.round(Math.random()*10);

	if (numero == 10 || numero == 9){
		alert("EXCELENTE");
	}
	else if (numero >= 4) {
		alert("APROBÓ");
	}
	else {
		alert("Vamos, la proxima se puede");
	}
}//FIN DE LA FUNCIÓN