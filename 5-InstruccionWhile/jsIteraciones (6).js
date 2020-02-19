function mostrar()
{

	var contador=0;
	var acumulador=0;

	acumulador = parseInt(prompt("Ingrese el primer número."));

	contador ++;
	
	while (contador != 5){

		acumulador = acumulador + parseInt(prompt("Ingrese el siguiente número."));

		contador ++;
	}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN