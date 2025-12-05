// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// Consigli del giorno
// Scriviamo sempre in italiano i passaggi che vogliamo fare
// Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

// Domande da  farsi quando si crea una funzione:
// Come dovrebbe chiamarsi?
// Ho bisogno di parametri?
// Devo restituire un valore?
// Se sì, di che tipo?


let userChoice = prompt("scegli un valore tra pari e dispari");
let userNumber = parseInt(prompt("inserisci un numero tra 1 e 5"));

//generiamo tramite funzione un numero tra 1 e 5 per il computer

function myNumber() {
    return Math.floor(Math.random() * 5) + 1;
}

// inserisco una variabile per assegnare il valore della funzione, altrimenti non posso utilizzare myNumber nella somma che ho bisogno dopo, perchè mi sballa tutto

let pcNumber = myNumber();

// facciamo la somma tra i 2 numeri

let somma = pcNumber + userNumber;



//faccio un console log per vedere i numeri

console.log(somma, " questa sarebbe la somma");
console.log(userNumber, "questa sarebbe la mia scelta di numero");
console.log(pcNumber,", questa la scelta randomica del sistema");
console.log(userChoice, ", questa sarebbe la mia scelta tra pari e dispari");





//tramite funzione indichiamo se la somma è pari o no

function isPari(somma) {
    if (somma % 2 === 0) {
        return "pari"
    }
    else {
        return "dispari"
    }
}

// dichiarazione del vincitore

if (userChoice === isPari(somma)) {
    {
        console.log("hai vinto !!!!!")
    }
} else {
    console.log("ritenta sarai più fortunato!!")
}