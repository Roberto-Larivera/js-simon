console.log('int ok');

/*
Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.

*/

/*
- visualizza in pagina 5 numeri casuali             //ok

- fai partine un timing di 30sec

- dopo 30sec fai scomparire i numeri

- richiedi all'utente i 5 numeri tramite prompt() (5 prompt())

- dopo l'inserimento fai la verifica dei numeri da individuare sono stati azzeccati

- controllo numero e ordine

b - fai scegliere la difficoltà (tempo)
b - fai scegliere quanti numeri visualizzare e in quale stadio (1-10 / 1-100 / 1-1000)
b - bho

*/

const numberGuess = [];
const numberUser = [];
let totalScore = 0;

controlNumberRandom (numberGuess, 1, 10)

console.log('numberGuess', numberGuess);

for(let i = 0; i < 5; i++){
    const requestUser = parseInt(prompt(`Inserisci il numero ${(i +1)}`))
    numberUser.push(requestUser)
    if(numberUser[i] == numberGuess[i]){
        console.log('Bravo numero indovinato')
        totalScore++;
    }
}
console.log('numberUser', numberUser);
console.log('totalScore', totalScore);


//  GENERATORE NUMERI RANDOM PER BOMBA  FUNZIONE COPIATA

function numberRandom (min, max){
    return Math.floor(Math.random () * (max - min + 1) + min);
}
function controlNumberRandom (nameArray, min, max){
    for(let i = 1 ; i <= 5; i++){
        if(nameArray.length < max){
            let numberRandomReturn = numberRandom (min, max);
            while(nameArray.includes(numberRandomReturn)){
                numberRandomReturn = numberRandom (min, max);
            }
            nameArray.push(numberRandomReturn);
        }
        
    }
    console.log('console log dentro funzione',nameArray.sort());
}
