function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';

	while (respuesta == "si") {

		acumulador = acumulador + parseFloat(prompt("Ingrese un número."));
		respuesta = prompt("Desea ingresar otro numero? Escriba \"si\" si es el caso");
		contador ++
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN