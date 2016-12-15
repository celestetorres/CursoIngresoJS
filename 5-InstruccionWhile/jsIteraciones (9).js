function Mostrar()
{

	var contador=0;
	// declarar variables
	
	var minimo;
	var maximo;
	var respuesta='si';

	while(respuesta!='no')
	{
		contador++;
		numero=prompt("Por favor, ingrese un numero");
		numero=parseInt(numero);

		if(contador==1)//es la primera vez que entra
		{
			minimo=numero;
			maximo=numero;
		}
		else
	{

		if(numero<minimo)
		{
			minimo=numero;
		}
		if(numero>maximo)
		{
			maximo=numero;
		}

	}

		respuesta=prompt("¿Continuamos? Si o No");
	
	}

document.getElementById('maximo').value=maximo;
document.getElementById('minimo').value=minimo;


}//FIN DE LA FUNCIÓN