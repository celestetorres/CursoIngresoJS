function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

	switch(mesDelAño)
	{
	
	case"Febrero":
	alert("Este mes NO tiene más de 29 días");
	break;

	default:
	alert("Este més TIENE 30 días o más")
	break;


	}
//alert (mesDelAño);
	
	


}//FIN DE LA FUNCIÓN