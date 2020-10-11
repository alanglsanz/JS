function promedio(numero){
    //se podria hacer mas sencillo si se suma las entradas y despues se divide, 
    //se podria hacer tambien con while, do while, tambien mostrar en el html...
    //supongo que eso va segun las necesidades.
    let cantidad   = Number(numero);
        contador   = cantidad;
        array      = [];
        suma       = 0;

        for (let i = 0; i < cantidad; i++) {
            
            if (i === 0) {
                let ingreso = prompt(`Ingrese numero`);
                array.push(Number(ingreso));
                contador -= 1;
            }else{
                let ingreso = prompt(`restan ${contador} ingreso/s.`);
            
                array.push(Number(ingreso));
                contador -= 1;
            }
            
        }
        for (let j = 0; j < array.length; j++) {
            suma += array[j];
            
        }
        document.getElementById("resultado").innerHTML = `El promedio de numeros ingresados es de: <br> ${suma/cantidad}`;
    
}