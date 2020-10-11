
//EJERCICIO01_a


//UNA FORMA DE RESOLVERLA, LA MEJOR Y LA QUE PEDIA LA CONSIGNA

function Multiplicar(val1, val2){
	let resultado = val1 * val2; 

	document.getElementById('visorResultado').innerHTML = "<p>"+ resultado +"</p>";


}

//OTRA FORMA DE HACERLA, INCOMPLETA, LE FALTA RECIBIR LOS VALORES
/*function Multiplicar(document.getElementById('valor1').value * document.getElementById('valor2').value)ESTO NO ESTA BIEN, YA QUE TIENE QUE SER UN PARAMETRO DE LA FUNCION NO EL VALOR


function Multiplicar()
	let resultado = document.getElementById('valor1').value * document.getElementById('valor2').value;*/







//EJERCICIO O1_b

function CompararValores (val1, val2){

	//OTRA FORMA DE RESOLVERLA (LA MEJOR, CON UN CODIGO MAS LIMPIO):
		let mensaje = "";

		if (val1>val2){
			mensaje = "mayor"
		}else{
			if (val1<val2){
				mensaje = "menor"
			}else{
				mensaje = "igual"
			}

	    }
		document.getElementById('visorComparacion').innerHTML = "<p> el valor1 " +val1+ " es "+ mensaje +" que el valor2 "+val2+"</p>";
}
	//UNA MANERA DE RESOLVERLO

	/*if (val1 > val2){
		document.getElementById('visorComparacion').innerHTML = "<p> el valor1 " +val1+ " es mayor que el valor2 "+val2+"</p>";
	}
	
	if (val1 < val2){
		document.getElementById('visorComparacion').innerHTML = "<p> el valor1 " +val1+ " es menor que el valor2 "+val2+"</p>";
	}

	if (val1 == val2){
		document.getElementById('visorComparacion').innerHTML = "<p> el valor1 " +val1+ " es igual que el valor2 "+val2+"</p>";
	}*/

	//OTRA MANERA DE RESOLVERLO

	/*if (val1 > val2){
		document.getElementById('visorComparacion').innerHTML = "<p> el valor1 " +val1+ " es mayor que el valor2 "+val2+"</p>";
	}else{
		if (val1 < val2){
			document.getElementById('visorComparacion').innerHTML = "<p> el valor1 " +val1+ " es menor que el valor2 "+val2+"</p>";
		}else{
			document.getElementById('visorComparacion').innerHTML = "<p> el valor1 " +val1+ " es igual que el valor2 "+val2+"</p>";

			
		}
	}*/

	//EJERCICIO O1_c

		function ConcatenarNombres (val1, val2){

		let resultado = val1 + val2;

		document.getElementById('visorConcatenacion').innerHTML = "<p>"+ resultado +"</p>";
	}

	//EJERCICIO O1_d


	function CalcularMontoAPagar(monto, medioPago){

		//ToUpper PASA EL MEDIO DE PAGO A MAYUSCULAS.
		//medioPago = medioPago.ToUpper(); 

		//SE CREA UN VARIABLE 0 YA QUE SABEMOS QUE ES NUMERICO, EN ESTE CASO ENTERO.
		let montoApagar = 0; 


	if (monto <200){
		//EL RETURN NO SIRVE, HAY QUE MOSTRARLO EN PANTALLA.
		montoAPagar = monto;
		
	}else{

		if(monto>=200 && monto<400){
			//aplico descuentos
			switch(medioPago){
				case 'E':
					montoAPagar = monto * 0.7;
					break;
				case 'D':
					montoAPagar = monto * 0.8;
					break;
				case 'C':
					montoAPagar = monto *0.9;
					break;
				default:
					//MUESTRA UN VALOR DE ERROR
					montoAPagar = "Error al calcular descuento"

					console.log("Error");

			}
		}else{
			montoAPagar = monto * 0.6;
		}
	}
	document.getElementById('visorMontoFinal').innerHTML = "<p> el monto final a pagar es "+ montoAPagar+ "</p>";

	
}






	
















