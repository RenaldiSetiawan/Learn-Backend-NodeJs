const _ = require('lodash'); // TODO
 
const myOddEvenArray = _.partition([1, 2, 3, 4, 5, 6], (n) => n % 2);
 
console.log(myOddEvenArray);

// Tugas Anda ialah:
// Pasang package lodash. > npm i lodash
// Gunakan package lodash pada TODO sehingga index.js dapat dieksekusi dengan baik.