/*
*Snack3*
Crea un array di numeri interi e fai la somma di tutti gli 
elementi  che sono in posizione (indice) dispari
*/

let numberInt = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
//la variabile = a 0 serve per far si che si modifichi all'interno del ciclo

for( let i = 1; i < numberInt.length; i= i+2){
      sum += numberInt[i];
}
console.log (numberInt);
console.log(`La somma è ${sum}`);

//oppure, dentro for:
//if (i % 2 !== 0 ){
    //la posizione i è dispari
    //sum += numberInt[i];
//}