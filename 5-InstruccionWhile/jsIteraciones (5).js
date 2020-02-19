function mostrar()
{

var sexo = prompt("ingrese f ó m .");

while (sexo != "f" && sexo != "F" && sexo != "m" && sexo != "M") {
    
    sexo = prompt("Error. Ingrese una letra valida.");
}

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN