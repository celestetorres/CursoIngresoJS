function Mostrar()
{
	var numeroRandom;
	var iteraciones=0;
	var cont1=0;
	var cont2=0;
	var cont3=0;
	var cont4=0;
	var cont5=0;
	var cont6=0;
	var cont7=0;
	var cont8=0;
	var cont9=0;
	var cont10=0;
	var contPar=0;
	var ContImpar=0;
	var porc=0;

	while(iteraciones<10000)
{
		iteraciones++;
		numeroRandom=Math.floor((Math.random() * 10) + 1);
		//console.log("numero :"+numeroRandom);
	
	switch(numeroRandom)
	
	{
		case 1:
			cont1++;
			break
		case 2:
			cont2++;
			break
		case 3:
			cont3++;
			break
		case 4:
			cont4++;
			break
		case 5:
			total=cont1+cont2+cont3+cont4+cont5+cont6+cont7+cont8+cont9+cont10;
			porc=cont5/total*100;
			if(porc<7)
			{
				cont5++;
			}
			else
			{
				iteraciones--;
				continue;
			}	

			break
		case 6:
			cont6++;
			break
		case 7:
			cont7++;
			break
		case 8:
			cont8++;
			break
		case 9:
			cont9++;
			break
		case 10:
			cont10++;
			break
	}//fin del swicht

	if(numeroRandom%2==0)
	{
		contPar++;
	}
	else
	{
		ContImpar++;
	}

}//fin while
	total=cont1+cont2+cont3+cont4+cont5+cont6+cont7+cont8+cont9+cont10;
	console.log("El numero 1 :"+ cont1+" veces"+cont1/total*100+"%");
	console.log("El numero 2 :"+ cont2+" veces"+cont2/total*100+"%");
	console.log("El numero 3 :"+ cont3+" veces"+cont3/total*100+"%");
	console.log("El numero 4 :"+ cont4+" veces"+cont4/total*100+"%");
	console.log("El numero 5 :"+ cont5+" veces"+cont5/total*100+"%");
	console.log("El numero 6 :"+ cont6+" veces"+cont6/total*100+"%");
	console.log("El numero 7 :"+ cont7+" veces"+cont7/total*100+"%");
	console.log("El numero 8 :"+ cont8+" veces"+cont8/total*100+"%");
	console.log("El numero 9 :"+ cont9+" veces"+cont9/total*100+"%");
	console.log("El numero 10 :"+ cont10+" veces"+cont10/total*100+"%");

console.log("% de Pares:"+(contPar/total*100));
console.log("% de Impares:"+(ContImpar/total*100));


	console.log("El total es: "+total);

//alert(numeroRandom);
	

}//FIN DE LA FUNCIÓN