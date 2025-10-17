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
//Creo un array vuoto per i numeri casuali
const numbers = [];
//Ciclo per aggiungere 5 numeri nell'array
for(let i = 0; i < 5; i++){
  numbers.push(randomNumber());
}
console.log(numbers);

//Creo una variabile vuota dove inserire un nuovo list item
let items = "";
//Scorro l'array per selezionare l'elemento
for(let i = 0; i < numbers.length; i++){
  //Inserisco nella variabile l'elemento in posizione i 
  items += `<li>${numbers[i]}</li>`;
}

//Aggiungo nell'elemento <ul>, la lista dei numeri
numberListElement.innerHTML = items;

//Seleziono l'elemento del timer
const timerElement = document.getElementById("timer");

//Setto il contatore
let counter = 30;

//Stampo il timer in pagina
timerElement.innerHTML = `Timer: ${counter--}s`;

//Creo una timing function per il conto alla rovescia di 30s
const clock = setInterval(() => {
  if(counter < 0){
    numberListElement.classList.add("d-none");
    clearInterval(clock);
  } else{
    timerElement.innerHTML = `Timer: ${counter--}s`;
  }
}, 1000)

let findCount = 0;
let findedNumbers = "";
const userNumbers = [];

setTimeout(() => {
  const number1Element = document.getElementById("number1");
  
  const number2Element = document.getElementById("number2");
  
  const number3Element = document.getElementById("number3");
  
  const number4Element = document.getElementById("number4");
  
  const number5Element = document.getElementById("number5");
  
  const formElement = document.getElementById("user-input");
  formElement.classList.remove("d-none");
  
  const buttonElement = document.getElementById("button");
  buttonElement.addEventListener("click", (event) => {
    event.preventDefault();

    userNumbers.push(
      Number(number1Element.value),
      Number(number2Element.value),
      Number(number3Element.value),
      Number(number4Element.value),
      Number(number5Element.value)
    );
    console.log(userNumbers);    
    for(let i = 0; i < numbers.length; i++){
      if(userNumbers.includes(numbers[i])){
        console.log(`Il numero ${numbers[i]} c'è`);
        findedNumbers += numbers[i];
        findCount++;
      } else{
      console.log(`Il numero ${numbers[i]} non c'è`);
      }
    }
    console.log(`Hai trovato ${findCount} numeri`);
    console.log(`Hai trovato questi numeri: ${findedNumbers.split("")}`);
  })
}, 31000)
