function Mostrar()
{
//tomo la edad  
var edad
var estadoCivil

edad=document.getElementById('edad').value
estadoCivil=document.getElementById('estadoCivil').value

console.log(estadoCivil)
if(estadoCivil!="Soltero" && edad<18) {
	alert("Muy pequeño para NO ser soltero");
}
// if(No = soltero, menor a 18 = muy pequeño para no ser soltero)

}//FIN DE LA FUNCIÓN