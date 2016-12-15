function Mostrar()
{
	var contador;
	contador=10;
	document.write("<h1>Hola</h1>")//titulo

	//alert('iteración while');
	while(contador>0)
	
	{
		console.log(contador);
		document.write("<br>contador: "+contador)//br=para que baje de renglon
		/*poner esto arriba del contador, así cuenta desde el primer numero que indicamos, sino arranca de uno menos*/
		contador--;
	
	}

	console.log("<p>fin</p>");//parrafo

}//FIN DE LA FUNCIÓN