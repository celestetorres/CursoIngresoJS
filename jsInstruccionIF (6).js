function Mostrar()
{
//tomo la edad  
var edad;
edad=document.getElementById('edad').value;
/*
if (edad<13)
{
//es menor
alert("Es MENOR")
}
if (edad>=13 && edad<=17){
{

alert("Adolescente")
//adolescente
}
if(edad>17)
{

alert("Es MAYOR")
	//mayor

};*/ //OP 1
if (edad<13)
{
alert("MENOR");
}
else
{
	if(edad>17)
	{
alert("MAYOR");
}
	else
	{
		alert ("ADOLESCENTE");
	}
	//ADOLESCENTE
}

}//FIN DE LA FUNCIÓN