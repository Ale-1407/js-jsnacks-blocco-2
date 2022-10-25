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
