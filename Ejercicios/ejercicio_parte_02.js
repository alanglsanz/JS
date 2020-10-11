
//EJERCICIO_02_a

function DibujarArbol(altura){
	console.log(altura)

	let arbol = "";

//DE ESTA MANERA ME LO DIBUJA PERO FUERZA AL USUARIO AL ELEGIR EL VALOR QUE QUEREMOS
	/*arbol += "<p>*</p>";
	arbol += "<p>**</p>";
	arbol += "<p>***</p>";
	arbol += "<p>****</p>";
	arbol += "............."
	etc*/
	
	for(let i=0; i<altura; i++){
		arbol += "<p>";

		for (let j=0; j<=i; j++) {
			arbol += "*";
			
		}
		arbol += "</p>";
	}
	
	document.getElementById('arbol').innerHTML = arbol; 
}


//EJERCICIO_02_b

function MostrarNombreDia (numeroDia){

	let nombreDia = "";
	numeroDia = Number(numeroDia)

	//SE PODRIA HACER UN IF AUNQUE NO ES LA MEJOR FORMA

	/*if(para lunes...

		)
	if(para el martes...

		)
	if...para el miercoles, etc.*/

	switch(numeroDia){


		case 1: 
			//lunes
			nombreDia = "Lunes";
			break;
		case 2:
			//martes
			nombreDia = "Martes";
			break;
		case 3:
			//miercoles
			nombreDia = "Miercoles";
			break;
		case 4:
			//jueves
			nombreDia = "Jueves";
			break;
		case 5:
			//Viernes
			nombreDia = "Viernes";
			break;
			//Sabado y Domingo
		case 6:
		case 7:
			nombreDia = "Fin de Semana";
			break;
		default:
		nombreDia = "ERROR - NO ES NUMERO VALIDO"	

	}

	document.getElementById('visorNombreDia').innerHTML="<p> El dia es "+nombreDia+"</p>";




}









