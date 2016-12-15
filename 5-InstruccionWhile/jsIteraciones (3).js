function Mostrar()
{

var clave = prompt("ingrese el número clave.");

	/* HORRIBLE, NONONONO.
	if(clave==utn750)
	*/

	while(clave!="utn750")//para validar, siempre va el ERROR. (mientras sea distinto, a la clave que pide)
	{
	
	clave = prompt("Re-ingrese, clave no existe");

	}
	
	alert("Bienvenido");

}//FIN DE LA FUNCIÓN
