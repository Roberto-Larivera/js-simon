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

- fai partine un timing di 30sec                                                                //ok

- dopo 30sec fai scomparire i numeri                                                            //ok      

- richiedi all'utente i 5 numeri tramite prompt() (5 prompt())                                  //ok

- dopo l'inserimento fai la verifica dei numeri da individuare sono stati azzeccati             //ok

- controllo numero e ordine                                                                     //ok

b - fai scegliere la difficoltà (tempo)
b - fai scegliere quanti numeri visualizzare e in quale stadio (1-10 / 1-100 / 1-1000)
b - bho

*/

// COSTANTI
let numberGuess = [];
let numberUser = [];
let totalScore = 0;
const containerGrid = document.getElementById('container-grid');
const timeClock = document.getElementById('time-clock');
const submitStart = document.getElementById('submit-start');



// PROGRAMMA ESECUZIONE
submitStart.addEventListener('click',
    function (){
            //RESET
        // timeClock.innerHTML = '';
        let countdownTime = 5;
        containerGrid.innerHTML = '';
        numberGuess = [];
        numberUser = []; 
        


        const timeCl = setInterval(() => {
            createHAlt (containerGrid, countdownTime);
            
            if (countdownTime == 0){
                clearInterval(timeCl);
                timeClock.innerHTML ='';
            }
            else{
                countdownTime--;
                //console.log('countdownTime',countdownTime);
            }

        }, (1000));
        
        setTimeout(() =>{
            controlNumberRandom (numberGuess, 1, 10, containerGrid);

        },1000)

        console.log('numberGuess', numberGuess);

        

        const GameUserTime = setTimeout(()=>{
            gameUser(timeClock)
        }, 6000);
})








//FUNZIONI

function gameUser (){
    containerGrid.innerHTML ='';
    const scoreLive = document.getElementById('score-live');
    setTimeout(() => {
            
        for(let i = 0; i < 5; i++){
           /*
            let requestUser;
            do {
                requestUser = parseInt(prompt(`Inserisci il numero ${(i +1)}`))
            } while (isNaN(requestUser));
            numberUser.push(requestUser)
            */
            if(numberUser[i] == numberGuess[i]){
                console.log('Bravo numero indovinato')
                totalScore++;
                scoreLive.innerHTML = `Score: ${totalScore}`;
            }
            else{
                console.log('Numero non indovinato')
        
            }
        }
        console.log('numberUser', numberUser);
        console.log('totalScore', totalScore);
        
        const messageScore = (`Hai ottenuto ${totalScore} punti/o`);
        createP (containerGrid, messageScore);
        }, 1000);

}












//  GENERATORE NUMERI RANDOM PER BOMBA  FUNZIONE COPIATA

function numberRandom (min, max){
    return Math.floor(Math.random () * (max - min + 1) + min);
}
function controlNumberRandom (nameArray, min, max, containerGrid){
    for(let i = 1 ; i <= 5; i++){
        if(nameArray.length < max){
            let numberRandomReturn = numberRandom (min, max);
            while(nameArray.includes(numberRandomReturn)){
                numberRandomReturn = numberRandom (min, max);
            }
            nameArray.push(numberRandomReturn);

            createP (containerGrid, numberRandomReturn);
        }
        
    }
}

function createP (containerGrid, numberRandomReturn){
    const newP = document.createElement('p');
    newP.innerHTML = numberRandomReturn;
    containerGrid.append(newP);
    
}


function createHAlt (container, number){
    //container.innerHTML = '';
    // const newH = document.createElement('h5');
    // newH.classList.add('new-h');
    
    timeClock.innerHTML = (`Ricorda.. ${number} secondi`);

    
    
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




/*
let contatore = 10;

const clock = setInterval(function () {

    if (contatore == 0) {
        clearInterval(clock);
        console.log('Buon anno!');
    }
    else {
        console.log(contatore);
        contatore--;
    }
    

}, 1000);

*/