function mostrar()
{

	var numero = parseInt(prompt("ingrese un número entre 0 y 9 (inclusive)."));

	while (numero > 9 || numero < 0 || isNaN(numero))
	{
		numero = parseInt(prompt("El numero ingresado no es valido. Ingrese un número entre 0 y 9 (inclusive)."));
	}
		document.getElementById("Numero").value = "Su numero es: " + numero

	

}//FIN DE LA FUNCIÓN	