function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;

	var respuesta='si';

while (respuesta == "si") {

		numero = parseFloat(prompt("Ingrese un número."));

		if (numero >= 0){
			positivo = positivo + numero;
		}
		else if (numero < 0){
			negativo = negativo * numero;

		}
		
		respuesta = prompt("Desea ingresar otro numero? Escriba \"si\" si es el caso");
		contador ++
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN