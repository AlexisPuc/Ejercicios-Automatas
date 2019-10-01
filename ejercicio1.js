// Todas las palabras que tengan una logintud de 7 o mas letras
let mensaje1="1.-las Palabras es una forma de comunicarse con las personas del mundo exterior";
let newMensaje1= mensaje1.replace(/[a-z]{7,}/g," ");
console.log(newMensaje1);


//Expresiones que No finalicen con una vocal
let mensaje2="2.-las Palabras es una forma.com de comunicarse con las personas del mundo exterior";
let newMensaje2= mensaje2.replace(/[^aeiou\s]\b/g,"*");
console.log(newMensaje2);


//La palabras que inicien con"M" donde la segunda no sea vocal
let mensaje3="3.-las Palabras es una forma de comunicarse con las personas por mcdonals ms mr mc";
let newMensaje3= mensaje3.replace(/[m][^aeiou\s][a-z]{0,}/g," ");
console.log(newMensaje3);


//Eliminar la comillas y el texto dentro
let mensaje4="4.-las Palabras es una forma de 'comunicars' con las personas del mundo 'exterior'";
let newMensaje4= mensaje4.replace(/[''?][a-z]{0,}/g," ");
console.log(newMensaje4);


//Eliminar el IP
let mensaje5="5.-Las computadoras Ultimizan el Ip 192.168.1.2 y no 34 53";
let newMensaje5= mensaje5.replace( /(\d){1,3}\.(\d){1,3}\.(\d){1,3}\.(\d){1,3}/g,"");
console.log(newMensaje5);;


//eliminar LA HORA
let mensaje6="6.- Me levanto alas 08:00:00 para desayunar";
let newMensaje6= mensaje6.replace( /(\d\W)?[00:00:00][0-9][0-9]{0,}/g,"");
console.log(newMensaje6)


//Numero Telefonico 
let mensaje7 = "7.-Mi numero Tel es:9851002998 pero para mis desconocidos es 123 , 89 "; 
let newMensaje7 = mensaje7.replace(/[0-9]{10,20}/g, "*");
console.log(newMensaje7);

//Eliminar el correo electronico
let mensaje8="8.-Ten una cuenta que es Roberto.puc@hotmai.com para mandar documentos";
let newMensaje8= mensaje8.replace(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}\b/g,"");
console.log(newMensaje8);


//eliminar el URL
let mensaje9 = "9.-https://www.google.com , Es una pagina para navegacion"; //elimina el URL
let newMensaje9 = mensaje9.replace(/(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?/g, "*");
console.log(newMensaje9)


//elimina un codigo postal
let mensaje10 = "10.-97780, 78 , 51  97783"; 
let newMensaje10 = mensaje10.replace(/[0-9]{5}/g, "*");
console.log(newMensaje10);