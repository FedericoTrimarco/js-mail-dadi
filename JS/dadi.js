
/*    
   Gioco dei dadi
   - Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
     Stabilire il vincitore, in base a chi fa il punteggio più alto. 
 */

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
