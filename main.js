/* 
   Mail
- crea una lista contenente almeno 3 indirizzi email
- chiedi all’utente la sua email,
- controlla che sia nella lista di chi può accedere (lista creata sopra al punto 1),
- stampa un messaggio appropriato sull’esito del controllo.

   Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. 

*/

    //  ESERCIZION MAIN
console.log('GIOCO EMAIL');

const listEmail = ['lello@gmail.com', 'federico@gmail.com', 'nancy@gmail.com'];
console.log(listEmail);

let userEmail = prompt('qual è la tua email?');
console.log(userEmail);

let userFound = false;

if(userEmail === ''){
    alert('inserire email');
  } else{

    for(let i = 0; i < listEmail.length; i++){
        
        if(listEmail[i] === userEmail){
            userFound = true;
            break;
        }
    }

    if(userFound){
        console.log(userFound);
        console.log(`${userEmail} è presente nella lista`);
    } else if(!userFound){
        console.log(userFound);
        console.log(`${userEmail} non è presente nella lista`);
    }
}

// ESERCIZIO DADI
console.log('GIOCO DADI');
let userNum = Math.floor(Math.random() * 6) + 1;
console.log('numero random utente:', userNum);

let computerNum = Math.floor(Math.random() * 6) + 1;
console.log('numero random computer:', computerNum);

if(userNum > computerNum){
    console.log("Vince l'essere umano");
}
else if(computerNum > userNum){
    console.log("Vince il computer");
}
else{
    console.log("parità");
}



