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
- visualizza in pagina 5 numeri casuali                                                         //ok

- fai partine un timing di 30sec

- dopo 30sec fai scomparire i numeri

- richiedi all'utente i 5 numeri tramite prompt() (5 prompt())                                  //ok

- dopo l'inserimento fai la verifica dei numeri da individuare sono stati azzeccati             //ok

- controllo numero e ordine                                                                     //ok

b - fai scegliere la difficoltà (tempo)
b - fai scegliere quanti numeri visualizzare e in quale stadio (1-10 / 1-100 / 1-1000)
b - bho

*/

const numberGuess = [];
const numberUser = [];
let totalScore = 0;

controlNumberRandom (numberGuess, 1, 10)
console.log('numberGuess', numberGuess);

setTimeout(gameUser, 5000);
function gameUser (){
    for(let i = 0; i < 5; i++){
        const requestUser = parseInt(prompt(`Inserisci il numero ${(i +1)}`))
        numberUser.push(requestUser)
        if(numberUser[i] == numberGuess[i]){
            console.log('Bravo numero indovinato')
            totalScore++;
        }
        else{
            console.log('Numero non indovinato')
    
        }
    }
    console.log('numberUser', numberUser);
    console.log('totalScore', totalScore);

}


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


/*
const seconds = parseInt(prompt('Inserisci il tempo di cottura:'));

const risultato = trasformazioneDiSecondiWow(seconds);

// TUTTE LE SEGUENTI SINTASSI SONO EQUIVALENTI
// Sintassi 1
setTimeout(alertTime, risultato);

// Sintassi 2
// setTimeout(alertTime, trasformazioneDiSecondiWow(seconds));

// Sintassi 3
// setTimeout(function () {
//     alert('La pasta è pronta!');
// }, trasformazioneDiSecondiWow(seconds));

// Sintassi 4
// setTimeout(() => {
//     alert('La pasta è pronta!');
// }, trasformazioneDiSecondiWow(seconds));




function trasformazioneDiSecondiWow(inputUtente) {

    return inputUtente * 1000;

}

function alertTime() {

    alert('La pasta è pronta!');

}
*/