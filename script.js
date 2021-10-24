'use strict';
//Pirma užduotis
var pristatymoKaina = 30;
do {
  var kaina = prompt('Įveskite prekės kainą!');
  kaina = Number(kaina);
}while(isNaN(kaina) || kaina <= 0 )
  var suPristatymu = confirm('Ar reikalingas prekės pristatymas?');
  if(suPristatymu){
    do{
      var miestas = prompt('Į kurį miestą reikia pristatyti!');
    } while (!miestas)
      console.log('Prekės kaina: ' + kaina + ' €.');
      console.log('Pristatymo kaina: ' + pristatymoKaina + ' €.');
      console.log('Prekės kaina: ' + (kaina + pristatymoKaina) + ' €.');
      console.log('Prekę pristatysime į ' + miestas + ' per 1-3 dienas.');
    } else {
      console.log('Prekės kaina: ' + kaina + ' €');
      console.log('Prekes galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a.');
    }
