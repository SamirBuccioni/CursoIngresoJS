function mostrar()
{
    var i;
    for(i=10; i>=0; i= i-1){
       var s;
       for(s=0; s<i; s = s+1){
        document.write("*");
       }
       document.write("<br>");
       
    }
}