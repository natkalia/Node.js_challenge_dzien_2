// Napisz program, w którym otworzysz plik znajdujący się w app/data/zadanie01/input.json (z poziomu Twojego programu to będzie plik ./data/zadanie01/input.json).
// Jest to tablica liczb w formacie JSON. Aby ją rozkodować do tablicy JS skorzystaj z JSON.parse(daneWejsciowe).
// Następnie zsumuj wszystkie liczby, a wynik zapisz tekstem do pliku app/data/zadanie01/sum.txt.
// Pamiętaj, że funkcje odczytu i zapisu są asynchronicze! Twój kod powinien odpowiadać takiemu pseudokodowi:

// ODCZYT PLIKU
//     KIEDY SKOŃCZY - CALLBACK:
//     ZMIANA JSONA NA TABLICĘ
//     WYKONANIE SUMY
//     ZAPIS PLIKU
//         KIERY SKOŃCZY - CALLBACK:
//         INFORMACJA O POWODZENIU LUB BŁĘDZIE
// Nie zapomnij o require() dla odpowiedniego modułu.


const fs = require('fs');
let path1 = './data/zadanie01/input.json';
let path2 = './data/zadanie01/sum.txt';

fs.readFile(path1, function read (err, data) {

  if (err === null) {
    
    data = JSON.parse(data);
  
    let sum = 0;

    for (let i = 0; i < data.length; i++) {
      sum += data[i];
    }

    fs.writeFile(path2, sum, function write (err) { 
    
      if (err === null) {
        console.log("Done!");
      } else { 
        console.log(`Error: ${err} !`);
      }
    });

  } else { 
    console.log(`Error: ${err} !`);
  }
});