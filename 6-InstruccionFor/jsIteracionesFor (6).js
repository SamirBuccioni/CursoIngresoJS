function mostrar()
{
var numero;
var i = 0;
var n = 2;

numero = parseInt(prompt("Ingrese un número"));

if (numero <= 0){

    if (numero%2 != 0){
        numero ++;
    }

    //Math.abs(numero); no me funcionó en la expresion inicial
    //ni antes del for.
    document.write("  " + 0 + "<br>");

    for (numero *= -1; n <= numero ; n = n + 2){

        document.write("-" + n + "<br>");
        i ++;
    }
}
else if (numero > 1){

    if (numero%2 != 0){
        numero --;
    }
    for ( ; n <= numero ; n = n + 2){

        document.write( n + "<br>");
        i ++;
    }
}
else if (isNaN(numero)){
    document.write("Caracter inválido. Ingrese un numero.");
}
 

document.write("Se encontraron " + i + " números impares.")

}//FIN DE LA FUNCIÓN