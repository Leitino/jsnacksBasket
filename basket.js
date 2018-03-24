/*Sport Record Book
Il software deve generare casualmente le statistiche di gioco di 100 giocatori di basket per una giornata di campionato.
In particolare vanno generate per ogni giocatore le seguenti informazioni, facendo attenzione che il numero generato abbia senso:
Codice Giocatore Univoco (formato da 3 lettere maiuscole casuali e 3 numeri)
Numero di punti fatti
Numero di rimbalzi
Falli
Percentuale di successo per tiri da 2 punti
Percentuale di successo per  da 3 punti
Una volta generato il “database”, il programma deve chiedere all’utente di inserire un Codice Giocatore e il programma restituisce le statistiche.*/

var giocatori = []

for (var i = 0; i < 100; i++) {
  var nuovo_giocatore = {
    'numGiocatore' : randomCode(),
    'puntiFatti' : casuale(0, 50),
    'rimbalzi' : casuale(0, 30),
    'falli' : casuale(0, 10),
    'tiri2punti' : tiri2Percentuale(),
    'tiri3punti' : tiri3Percentuale(),

  }
    console.log(nuovo_giocatore)
}















function randomCode() {
  var lettere = 'ABCDEFGHILMNOPQRSTUVZ';
  var numGiocatore = "";
  for (var i = 0; i < 3; i++) {
    numGiocatore += lettere.charAt(casuale(0,lettere.length-1));
  }
  for (var i = 0; i < 3; i++) {
    numGiocatore +=casuale(0,9)
  }
  return numGiocatore
}


function casuale(inizio,fine) {
  return Math.floor(Math.random() * (inizio + fine +1)) + inizio;
}

function tiri2Percentuale() {
  var tiri=0
  tiri = casuale(0, 30)
  var tiriRiusciti = casuale(0, tiri)
  var percentuale= tiriRiusciti/tiri*100
  return percentuale
}

function tiri3Percentuale() {
  var tiri=0
  tiri = casuale(0, 20)
  var tiriRiusciti = casuale(0, tiri)
  var percentuale= tiriRiusciti/tiri*100
  return percentuale
}
