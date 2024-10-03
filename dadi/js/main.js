console.log("it works");

//1)Generare un numero random da 1 a 6:
// a)sia per il giocatore;
// b)sia per il computer;


//Stabilire il vincitore: 
//condizione: in base a chi fa il punteggio più alto.(1.punteggio più alto--> Win; 2. punteggio più basso --> lose; 3. stesso punteggio --> equality)

let player1 = Math.floor(Math.random() * 7);
console.log(player1);

let player2 = Math.floor(Math.random() * 7);
console.log(player2);

if (player1>player2){
    
    let message = "player 1 is the winner";
    console.log(message);
    
}else if(player2>player1){
    let message = "player 2 is the winner";
    console.log(message);
    
}else{
    let message = "equality";
    console.log(message);
    
}









//Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?

