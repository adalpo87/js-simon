/*
simon-dice
1. Al via il computer genera 5 numeri
2. Vengono mostrati per 5 secondi i numeri generati
3. L'utente deve indovinare i 5 numeri
4. Quindi c'è un'attesa di 5 secondi perchè il computer mostra calcolo in corso
5. Vengono mostrati i numeri indovinati
 */

$(function(){
//creo tre array dove vengono salvati i numeri
  var arrayRandom = [];
  var myNumber = [];
  var numeriCorretti = [];
  var limite = 5;
 
  reset();
//clicco su via e mi compaiono i 5 numeri generati dal computer che vengono pushati nell'array
  $('#btn-start').click(function () {
    while(arrayRandom.length < limite){
      var numero = numberGenerator(1, 99);
      if(!arrayRandom.includes(numero)) arrayRandom.push(numero);
    }
  printDisplay('I numeri estratti sono ' + arrayRandom.join(' - '));
  $('#btn-start').hide();

  setTimeout(function () {
    printDisplay("Indovina i 5 numeri");
    $("#btn-box").show();
  }, 5000);

  })
//dopo 5 secondi i numeri spariscono e compare l imput dove l utente inserisci i numeri

//i numeri inseriti dall'utente verranno salvati in un array

//i due array vengono confrontati, i numeri corrispondenti vengono pushati nel terzo array

})



//FUNZIONI
//Funzione di reset
function reset() {
  arrayRandom =[];
  myNumber =[];
  numeriCorretti =[];
  printDisplay('Per giocare premi VIA')
  $('#btn-box').hide();
  $('#btn-start').show();
  $('#btn-restart').hide();
  $('#display').show();
}

//funzione che genera testo
function printDisplay(text) {
  $('#display').text(text);
}

//funzione che genera numeri
function numberGenerator(min, max){
  return Math.floor(Math.random()*(max - min + 1)+min);
}