function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta="si";

	while(respuesta=="si")//todo lo q esta dentro del while, es lo que se repite. 
	{
		contador++;
		numero=prompt("Por favor, ingrese un numero");
		numero=parseInt(numero);

	if(numero<0)

		{
			negativo=negativo*numero;
		}
	
	else
	{
			positivo=positivo+numero;
	}

	respuesta=prompt("Si desea consultar si o no");


	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN