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


