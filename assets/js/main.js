/* 
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.

Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.
*/

/* ========== HTML ========== */
//Creo uno o 5 elementi dove visualizzare i 5 numeri casuali
//Creo un elemento "invisibile" dove, in seguito allo scadere del tempo, appariranno 5 input
//Creo un bottone per confermare l'inserimento dei numeri

/* ========== JS ========== */
//Creare una timing functions, che, passati 30s
//Fa sparire i numeri
//Fa apparire 5 input
//Creare un evento click del bottone
//Controllo se il valore degli input corrisponde al valore dei numeri scomparsi
//Se trova una corrispondenza
//Conto il numero e lo stampo
//Se non trova corrispondenze
//Stampo un messaggio

//Selezione degli elementi dove andranno inseriti i 5 numeri casuali
const numberListElement = document.getElementById("number-list");

//Funzione che genera un numero casuale
function randomNumber(){
  return Math.ceil(Math.random() * 10);
}

const numbers = [];
for(let i = 0; i < 5; i++){
  numbers.push(randomNumber());
}
console.log(numbers);

const userNumbers = [];
for(let i = 0; i < 5; i++){
  //userNumbers.push(Number(prompt("Inserisci il numero che hai visto")));
}
console.log(userNumbers);

let findCount = 0;
let findedNumbers = "";
for(let i = 0; i < numbers.length; i++){
  if(userNumbers.includes(numbers[i])){
    console.log(`Il numero ${numbers[i]} c'è`);
    findedNumbers += numbers[i];
    findCount++;
  } else{
  console.log("Non c'è nessun numero");
  }
}
console.log(`Hai trovato ${findCount} numeri`);
console.log(`Hai trovato questi numeri: ${findedNumbers.split("")}`);


//Creo una variabile vuota dove inserire il nuovo elemento
let items = "";
//Ciclo per generare 5 numeri random
for(let i = 0; i < numbers.length; i++){
  items +=  `<li>${numbers[i]}</li>`;
}

//Aggiungo nell'elemento <ul>, la lista dei numeri
numberListElement.innerHTML = items;

const timerElement = document.getElementById("timer");
let counter = 30;

timerElement.innerHTML = `Timer: ${counter--}s`;
const clock = setInterval(() => {
  if(counter < 0){
    clearInterval(clock);
  } else{
    timerElement.innerHTML = `Timer: ${counter--}s`;
  }
}, 1000)
setTimeout(() => {
  numberListElement.classList.add("d-none");
}, 30000)

/* //const buttonElement = document.getElementById("button");
const userInputElement = document.getElementById("user-input");

//Uso una timing function
setTimeout(addInput, 3000);

//Funzione per aggiungere gli input in pagina
function addInput(){
  userInputElement.innerHTML = `
  <input>
  <input>
  <input>
  <input>
  <input>
`};  */
