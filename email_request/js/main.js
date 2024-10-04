console.log("it works");


//Chiedi all’utente la sua email
//lista di chi può accedere
//controlla (verify) che sia nella lista di chi può accedere
//stampa un messaggio appropriato sull’esito del controllo.


let emailRequest = prompt("Inserisci la tua mail");
console.log(emailRequest);

let mailList = ["andrea123@gmail.com","alt_mail@gmail.com", "marco_123@gmail.com"];

let emailIn = emailRequest;




if(mailList.includes(emailIn)) {

    let message = "Benvenuto";
    console.log(message);
    
}else{
    let message = "Email non presente";
    console.log(message);
    
}

//if(mailList.includes(emailIn))