function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;

		while(contador!=5)//es necesario hacer la condi porque sino, no entra nunca
	{
		numero=prompt("Por favor, ingrese un numero");
		console.log(contador);
		numero=parseInt(numero);//declarar parseInt, para convertir de text a numeros. 
		acumulador=acumulador+numero;//nombrar el acumulador, ya que esta declarado como 0 arriba.
		contador++;//si o si declarar que hacer, cuando ingreso los numeros

	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN