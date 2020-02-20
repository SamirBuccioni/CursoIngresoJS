function mostrar()
{

	/*
	var contador=0;
	var minimo;
	var maximo;
	var numero;
	var respuesta;

	numero = parseFloat(prompt("Ingrese un número."))
	while (isNaN(numero)){

		numero = parseFloat(prompt("Caracter inválido. Ingrese un número."));

		}
		
	maximo = numero;
	minimo = numero;

	respuesta = (prompt("Desea ingresar otro número? Escriba \"s\" de ser el caso."))

	while(respuesta == 's' || respuesta == 'S')
	{	
		numero = parseFloat(prompt("Ingrese el número."));
		while (isNaN(numero)){

		numero = parseFloat(prompt("Caracter inválido. Ingrese un número."));

		}
		if (numero > maximo){

			maximo = numero;

		}
		else if (numero < minimo){

			minimo = numero;

		}
		respuesta = (prompt("Desea ingresar otro número? Escriba \"s\" de ser el caso."));

	}
*/

	var flag=0;
	var minimo;
	var maximo;
	var numero;
	var respuesta;


	do {

		
			numero = parseFloat(prompt("Ingrese un número."))
			while (isNaN(numero)){

				numero = parseFloat(prompt("Caracter inválido. Ingrese un número."));
		
				}
				
			if (flag == 0 || numero > maximo){
				
				maximo = numero;
		
			}
		
			if (flag == 0 || numero < minimo){

				minimo = numero;
				flag ++;

		}

	

		respuesta = (prompt("Desea ingresar otro número? Escriba \"s\" de ser el caso."))


	} while (respuesta == 's' || respuesta == 'S');






	document.getElementById("maximo").value = maximo;
	document.getElementById("minimo").value = minimo;



}//FIN DE LA FUNCIÓN