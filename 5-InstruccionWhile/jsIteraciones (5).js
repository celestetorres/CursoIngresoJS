function Mostrar()
{

var sexo = prompt("ingrese f ó m .");

document.getElementById('Sexo').value=sexo;

	while(sexo!="f" && sexo!="m")
{

	sexo=prompt("Por favor, vuelva a ingresar su sexo F para FEMENINO, M para MASCULINO");

}

alert("Bienvenido");



}//FIN DE LA FUNCIÓN