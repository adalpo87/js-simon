/*
simon-dice
1. Al via il computer genera 5 numeri
2. Vengono mostrati per 5 secondi i numeri generati
3. L'utente deve indovinare i 5 numeri
4. Quindi c'è un'attesa di 5 secondi perchè il computer mostra calcolo in corso
5. Vengono mostrati i numeri indovinati
 */

$(function(){

  var arrayRandom = [];
  var myNumber = [];
  var numeriCorretti = [];
//creo un array dove vengono salvati i numeri


//clicco su via e mi compaiono i 5 numeri generati dal computer
//devo creare una funzione di reset



})




//FUNZIONI
//Funzione di reset
function reset() {
  $('#btn-box').hide();
  $('#btn-start').show();
  $('#btn-restart').show();
}

//Creo una funzione che mi genera numeri
function printDisplay(text) {
  $('#display').text(text);
}