/*
*Snack2*
Generatore di “nomi cognomi” casuali del grande gatsby:
Abbiamo una lista di nomi e una lista di cognomi, 
da queste vogliamo generare una "falsa" lista di invitati, 
dove ogni invitato nella lista, è l'unione di un "nome" e un 
"cognome" delle liste precedentemente dette, scelti in modo casuale.
*/

//creo array per i nomi e array per i cognomi

let names = ['Alessia', 'Martina', 'Federico', 'Gabriele', 'Giulia', 'Mara', 'Max'];
let randName = names.length;

let surnames = ['Carrera', 'Rossi', 'Esposito', 'Bianchi', 'Tulipano', 'Simone', 'Macario'];
let randSurname = surnames.length;

//genero invitati con nomi e cognomi casuali
//in stampa mando nomi e cognomi casuali 
//con l'aggiunta del - 1 a randname e randsurnames per far si che tutti i nomi e cognomi vengano inclusi 
console.log(names[Math.round(Math.random() * (randName - 1))] + ' ' + surnames[Math.round(Math.random() * (randSurname -1 ))])

//si poteva aggiungere un array fullNames per generare nomi e cognomi random
// es: fullnames [];
//successivamente in randName = Math.floor(Math.random() * names.lenght);
//cognomi: randSurname = Math.floor(Math.random() * surnames.lenght);
//console.log(il dato composto randomico è ${names [randName]} ${surname[randSurname]})

//estrarre un dato da un array
//nomeArray[posizioneElemento] => nomeArray[2] => estrarre dall'array in posizione 2
//ciclo for e al suo interno andiamo a interrogare fullNames.push con il risultato come in console.log