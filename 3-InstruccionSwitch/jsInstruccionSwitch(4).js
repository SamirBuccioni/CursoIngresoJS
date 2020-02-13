function mostrar()
{
//tomo la edad  
var mes= document.getElementById('mes').value;

switch (mes)
{
    case "Febrero":
        alert("Tiene 28 días (29 en biciesto)");
        break;

    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":

        alert("Tiene 30 días");
        break;
    
    default:
        alert("Tiene 31 días");
        
}
	
	



}//FIN DE LA FUNCIÓN