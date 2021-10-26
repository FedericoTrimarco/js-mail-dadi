 
/*    
   Mail
- crea una lista contenente almeno 3 indirizzi email
- chiedi all’utente la sua email,
- controlla che sia nella lista di chi può accedere (lista creata sopra al punto 1),
- stampa un messaggio appropriato sull’esito del controllo. 
*/

console.log('GIOCO EMAIL');

const listEmail = ['lello@gmail.com', 'federico@gmail.com', 'nancy@gmail.com'];

let userEmail = document.getElementById('email');

let buttonAccess = document.querySelector('.btn-access');

let result = document.querySelector('h2');

buttonAccess.addEventListener('click', function(){
    const email = userEmail.value;

    let userFound = false;
    
    if(email === '' || !isNaN(email)){
        alert('DATI NON VALIDI: inserire email');
    } else{

        for(let i = 0; i < listEmail.length; i++){
            
            if(listEmail[i] === email){
                userFound = true;
                break;
            }
        }
    
        if(userFound){
            result.innerHTML = `${email} è presente nella lista`;
        } else if(!userFound){
            result.innerHTML = `${email} non è presente nella lista`;
        }
    }
});




