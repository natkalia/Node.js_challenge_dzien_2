// Napisz program, który wyświetli zawartość wszystkich plików w folderze app/data/zadanie02/.
// Skorzystaj z możliwości listowania plików w folderze. Po otrzymaniu listy plików wyświetlaj je w pętli.
// Pamiętaj, że funkcje listowania i odczytu są asynchronicze! Twój kod powinien odpowiadać takiemu pseudokodowi:
// LISTOWANIE ZAWARTOŚCI KATALOGU
//     KIEDY SKOŃCZY - CALLBACK:
//     PĘTLA DLA KAŻDEJ NAZWY PLIKU
//     ODCZYT PLIKU
//         KIERY SKOŃCZY - CALLBACK:
//         WYŚWIETLENIE ZAWARTOŚCI PLIKU LUB INFORMACJI BŁĘDZIE

const fs = require('fs');

let pathFolder = 'data/zadanie02/';

fs.readdir(pathFolder, function myCallback (err, files) {
  if (err === null) {
    files.forEach(item => {
      console.log(item);
      let pathFile = pathFolder + item;
      fs.readFile(pathFile, function read (err, data) {
        if (err === null) {
          console.log(String(data));
        } else {
          throw err;
        }});
    });
  } else {
    throw err;
  }
});
