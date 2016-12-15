function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");

	while (numero<0 || numero>9)
	
	{

	numero=prompt("Por favor, vuelva a ingresar un numero entre 0 y 9 inclusive");

	}

	alert("Muy bien, mostri.");

}//FIN DE LA FUNCIÓN