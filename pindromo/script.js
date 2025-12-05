// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Consigli del giorno
// Scriviamo sempre in italiano i passaggi che vogliamo fare
// Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

// Domande da  farsi quando si crea una funzione:
// Come dovrebbe chiamarsi?
// Ho bisogno di parametri?
// Devo restituire un valore?
// Se sì, di che tipo?


//chiedere all'utente di inserire una parola

let word = prompt("inserisci una parola palidroma, verifichiamo se lo sia effettivamente")

function isPalindroma (userWord) {
    let wordContrario = userWord.split('').reverse().join(''); 

    if (wordContrario === userWord) {
        console.log(wordContrario, userWord)
        return true
    } else {
        return false
    }
}
console.log(isPalindroma(word));



