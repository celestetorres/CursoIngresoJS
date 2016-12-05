function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
console.log(mesDelAño);
switch(mesDelAño)
{
	case "Enero":
	alert("¡QUE COMIENCES BIEN EL AÑO!");
	break;

	case "Marzo":
	alert("¡A CLASES!");
	break;

	case "Julio":
	alert("¡SE VIENEN LAS VACACIONES");
	break;

	case "Diciembre":
	alert("¡FELICES FIESTAS!");
	break;
	
	default:
	alert("¡NOS VIMOOOOOO!")
	break;

}



}//FIN DE LA FUNCIÓN