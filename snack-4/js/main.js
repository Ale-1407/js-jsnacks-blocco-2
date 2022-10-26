/*
*Snack4 (Bonus)*
Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi all’array che ha meno elementi fino a quando 
ne avrà tanti quanti l’altro.
*/

let array1 = [2, 10, 8, 4];
let array2 = [3,4];

//variabili di controllo per andarle a sostituire con il valore dell'array Maggiore dell'altro
let arrayMaggiore;
let arrayMinore;

//trovare array con meno elementi
if(array1.lenght > array2.lenght){
    arrayMaggiore = array1;
    arrayMinore = array2;
    console.log = (arrayMaggiore);
} else if (array1.lenght == array2.lenght){
    console.log('Gli array hanno lo stesso numero di dati');
} else{
    arrayMaggiore = array2;
    arrayMinore = array1;
}

//quanti elementi mancano per rendere l'array miore uguale all'array maggiore
let differenzaLunghezzaArray = arrayMaggiore.lenght - arrayMinore.lenght;
//mancano due elementi all'array minore, che dobbiamo andare ad aggiungere

//i > dfferenzaLunghezzaArray andrà a fare due giri, in 0 e 1
for(let i = 0; i < differenzaLunghezzaArray; i++){
    
    //genero numero random da 0 a 100
    let numeroRandom = Math.floor(Math.random() * 100);

    console.log(`numero ciclo: ${i} e il numero random è: ${numeroRandom}`);
     
    arrayMinore.push(numeroRandom);
}

console.log(arrayMinore);