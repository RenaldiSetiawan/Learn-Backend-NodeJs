/* Node Package Manager */
// Node Package Manager (NPM) merupakan pengelola package untuk JavaScript yang dapat memudahkan kita dalam mengelola package yang tersedia pada https://www.npmjs.com/.
// NPM merupakan standard package manager yang disediakan oleh Node.js dan sudah otomatis terpasang ketika memasang Node.js
// NPM dapat dioperasikan melalui CMD atau Terminal

// NPM dapat digunakan untuk memasang atau menghapus third party module (modul pihak ketiga). 
// Modul yang dipasang melalui NPM akan disimpan pada folder node_modules.

// sangat menyarankan Anda untuk memasang modul pihak ketiga secara lokal saja
// Hindari pemasangan modul secara global karena akan menyebabkan banyak masalah
// Sebaiknya gunakan npx bila Anda ingin menjalankan Node.js package di mana pun Anda inginkan

// MomentJS merupakan modul pihak ketiga untuk mengelola waktu di Node.js
// Untuk memasangnya secara lokal > npm install moment
const moment = require('moment');

const date = moment().format('MMM Do YY');
console.log(date);

// untuk menghapus modul pihak ketiga, Anda bisa gunakan perintah npm uninstall <package-name>
// npm uninstall moment

// NPM juga bisa berfungsi sebagai runner script
// dituliskan pada objek scripts yang ada di berkas package.json
/* 
    "scripts": {
    "start-dev": "NODE_ENV=development node app.js",
    "start": "NODE_ENV=production node app.js"
  }
*/

// Runing > npm run star-dev / npm run start
