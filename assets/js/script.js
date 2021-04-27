/*
simon-dice
1. Al via il computer genera 5 numeri
2. Vengono mostrati per 5 secondi i numeri generati
3. L'utente deve indovinare i 5 numeri
4. Quindi c'è un'attesa di 5 secondi perchè il computer mostra calcolo in corso
5. Vengono mostrati i numeri indovinati
 */

$(document).ready(function(){
  reset();
  // array dei numeri ramdom generati dal computer
  var arrRandom = [];
  // array dove vado a salvare i miei numeri
  var arrNumber = [];
  // array dove vado a salvare i miei numeri compatibili con arrRandom
  var arrResult = [];

  $('#btn-start').click(function(){
    $(this).hide();
    while(arrRandom.length < 5){
      arrRandom.push(generatorRandomNumber(1,100));
    }
    console.log(arrRandom)

    printOutput(arrRandom.toString(),'#display')

    setTimeout(function(){
      printOutput('Indovina i 5 numeri', '#display');
      $('#btn-box').show();
    }, 5000);

  });

  //tramite input devo inserire 5 numeri che verranno pushati aLL'interno di arrNumber
 $('btn-start').click(function(){
	arrNumber.push(parseInt($('inp').val()));
	$('#inp').val('');

	if(arrNumber.length === parseInt($('')))
//FUNZIONI
function reset(){
  printOutput('Pronto.. Clicca VIA!', '#display');
  $('#btn-start').show();
  $('#btn-box').hide();
};

function printOutput (text, target){
  $(target).text(text);
};

function generatorRandomNumber(min, max){
 return Math.floor(Math.random()*(max - min + 1)+min);
};
