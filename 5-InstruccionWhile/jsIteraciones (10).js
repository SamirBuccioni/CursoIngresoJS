function mostrar()
{

	var contadornegativo=0;
	var contadorpositivo=0;
	var contadorceros=0;
	var positivo=0;
	var negativo=0;
	var numero;
	var respuesta;
	var contadorpares=0;

	do {

		numero = parseFloat(prompt("Ingrese un número."));

		if (numero%2 == 0){
			contadorpares++;
		}
		if (numero > 0){
			positivo = positivo + numero;
			contadorpositivo ++;
				} 
		else if (numero < 0){
			negativo = negativo + numero;
			contadornegativo ++;
		}
		else if (numero = 0){
			contadorceros ++;
		}
		respuesta = prompt("Desea ingresar otro numero? Escriba \"s\" si es el caso");
		
	} while (respuesta == 'S' && respuesta == 's');
	
	document.write("suma de negativos = " + negativo);
	




}//FIN DE LA FUNCIÓN