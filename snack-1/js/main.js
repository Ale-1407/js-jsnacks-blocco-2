/*
*Snack1*
Inserisci un numero, se è pari stampa il numero, se è dispari 
stampa il numero successivo ( del numero inserito dall'utente: 
esempio se il numero dell'utente è 2, il numero successivo è 3).
*/


let number = '';

//faccio scegliere all'utente un numero da 1 a 10
//solo un ciclo => i <= 1;

for (let i = 1; i <= 1; i++){

  let number = parseInt(prompt ('Inserisci un numero da 1 a 10'));

    if (number % 2 == 0){
        document.getElementById('risPari').innerText = `${number} è un numero PARI`
    } else{
        numSucc = number + 1;
        document.getElementById('risDisp').innerText = `Hai inserito un numero dispari, questo è il tuo nuovo numero: ${numSucc}`
    }
}

//parseFloat restituisce numeri con decimali, es 3.25
//pareseInt solo per numeri interi