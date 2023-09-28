/*Ejercicio 1:
Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase*/

function contarNumLetra (frase, letra){
    let contador = 0; 
    for (let i = 0; i<frase.length; i++){
        if (frase[i] == letra) {
            contador ++;
        }
    }
    return contador;
}

//COMPROBACIONES
/*contarNumLetra ("Hola amigos gracias por participar", "a")
contarNumLetra ("Hola amigos gracias por participar", "x")
contarNumLetra ("Hola amigos gracias por participar", "h")
*/


/*Ejercicio 2:
Diseña un algoritmo que imprima los números impares entre un número dado por el usuario y los siguientes 50 números

Entregad vuestra solución por classroom. Si os da tiempo, pensad varias maneras de resolverlo y enviad vuestras soluciones. Podéis enviar una primera solución y luego añadir otras en comentarios.*/

function imprimirImpares () {
    let num = (parseInt(prompt("Escribe un número, por favor")));
    for (let i = 0; i< 50; i++){
        if (num % 2 !== 0 ){
            console.log(num)
        }
        num ++
    }
};


//COMPROBACIONES
imprimirImpares ()

//VERSION SI SE ENTIENDE QUE EL EJERCICIO PIDE IMPARES A PARTIR DEL NUMERO DADO SIN INCLUIRLO 
function imprimirImparesB () {
    let num = (parseInt(prompt("Escribe un número, por favor")));
    let numDesde = num +1
    for (let i = 0; i< 50; i++){
        if (numDesde % 2 !== 0 ){
            console.log(numDesde)
        }
        numDesde ++
    }
};


//COMPROBACIONES
imprimirImparesB ()


