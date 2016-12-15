function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta="si";
	var numero;

		while(respuesta=="si")//es necesario hacer la condi porque sino, no entra nunca
	{
		contador++;
		numero=prompt("Por favor, ingrese un numero");
		console.log(contador);
		numero=parseInt(numero);//declarar parseInt, para convertir de text a numeros. 
		acumulador=acumulador+numero;
		respuesta=prompt("Si desea consultar si o no");

	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN