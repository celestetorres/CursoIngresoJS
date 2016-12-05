function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

	switch(mesDelAño)
	{
	
	case"Abril":
	case"Junio":
	case"Septiemnbre":
	case"Noviembre":

	alert("Este mes TIENE 30 días");
	break;

	case"Febrero":
	alert("Este mes TIENE 29 días");
	break;

	default:
	alert("Este més TIENE 31 días")
	break;

	}


	//alert (mesDelAño);
	
	



}//FIN DE LA FUNCIÓN