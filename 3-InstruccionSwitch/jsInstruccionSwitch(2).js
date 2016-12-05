function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

alert (mesDelAño);

	switch(mesDelAño)
	{
	
	case"Julio":
	case"Agosto":

	alert("CAGAMO, INVIERNO");
	break;

	case"Enero":
	case"Febrero":
	case"Marzo":
	case"Abril":
	case"Mayo":
	case"Junio":

	alert("POR SUERTE, FALTA");
	break;

	default:	
	alert("YA PASAMOS EL FRIO, PINTA CALOR")
	break;

	}




}//FIN DE LA FUNCIÓN