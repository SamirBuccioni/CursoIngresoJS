function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;

	var respuesta;

	do {

		numero = parseFloat(prompt("Ingrese un número."));

		if (numero >= 0){
			positivo = positivo + numero;
		}
		else if (numero < 0){
			negativo = negativo * numero;
			contador++;

		}
		
		respuesta = prompt("Desea ingresar otro numero? Escriba \"no\" si no es el caso");
		
	} while (!(respuesta == 'no' && respuesta == 'No'));
	
	if (contador == 0){

		negativo = "No ingreso ningun negativo";
	}



document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN