// Zadanie dnia: Program TrAwKa
// Dzisiejsze zadanie dnia pozwoli Ci stworzyć program "TrAwKa". Ma on modyfikować plik tekstowy w taki sposób, aby każdy nieparzysty znak był pisany wielką literą, a parzysty małą literą.
// Efekt będzie nieco przypominał nieprzystrzyżony trawnik ;) Np. plik z zawartością Hello, World! zamieni na HeLlO, wOrLd!.
// Wykorzystaj wiedzę z dnia pierwszego i spraw, aby nazwa pliku do modyfikacji mogła być podawana jako argument Twojego programu Node.
// Pamiętaj, że funkcje odczytu i zapisu są asynchronicze! Twój kod powinien odpowiadać takiemu pseudokodowi:
// ODCZYT PLIKU
//     KIEDY SKOŃCZY - CALLBACK:
//     ZMIANA TEKSTU WEDŁUG WZORU
//     ZAPIS TAKIEGO SAMEGO PLIKU
//         KIERY SKOŃCZY - CALLBACK:
//         INFORMACJA O POWODZENIU LUB BŁĘDZIE
// Zawsze wykonuj kopię zapasową pliku na którym operujesz!
// Do testu możesz posłużyć się plikiem w app/data/zadanieDnia/test.txt np. w ten sposób:
// node zadanieDnia.js ./data/zadanieDnia/test.txt

const fs = require('fs');
let path = process.argv[2];

fs.readFile(path, (err, data) => {

  if (err === null) {

    data = String(data);
    data = data.split('');

    for (let i = 0; i < data.length; i++) {
      if (i % 2 === 0 ) {
        data[i] = data[i].toUpperCase();
      } else if (i % 2 !== 0 ) {
        data[i] = data[i].toLowerCase();
      } else {
      console.log('Error!');
      }
    }

    data = data.join('');

    fs.writeFile(path, data, (err) => {
      if (err === null) {
        console.log('OK!')
      } else {
        console.log('Error!');
      }
    });

  } else {
    console.log('Error!');
  }

});