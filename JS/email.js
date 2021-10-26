 
/*    
   Mail
- crea una lista contenente almeno 3 indirizzi email
- chiedi all’utente la sua email,
- controlla che sia nella lista di chi può accedere (lista creata sopra al punto 1),
- stampa un messaggio appropriato sull’esito del controllo. 
*/

console.log('GIOCO EMAIL');

const listEmail = ['lello@gmail.com', 'federico@gmail.com', 'nancy@gmail.com'];
console.log(listEmail);

let userEmail = document.getElementById('email');
console.log(userEmail);

let buttonAccess = document.querySelector('.btn-access');
console.log(buttonAccess);

let result = document.querySelector('h2');

buttonAccess.addEventListener('click', function(){
    const email = userEmail.value;
    console.log(email);


    let userFound = false;
    
    if(email === ''){
        alert('inserire email');
    } else{

        for(let i = 0; i < listEmail.length; i++){
            
            if(listEmail[i] === email){
                userFound = true;
                break;
            }
        }
    
        if(userFound){
            console.log(userFound);
            result.innerHTML = `${email} è presente nella lista`;
            console.log(`${email} è presente nella lista`);
        } else if(!userFound){
            console.log(userFound);
            result.innerHTML = `${email} non è presente nella lista`;
            console.log(`${email} non è presente nella lista`);
        }
    }
});




