// Seluruh data di komputer dikelola dan diakses melalui filesystem
// i back-end malah filesystem menjadi fitur esensial karena dalam pengembangan back-end akan sering sekali mengakses atau menulis sebuah berkas di dalam komputer

// Node.js menyediakan core modules (fs) yang dapat mempermudah kita dalam mengakses filesystem

/* method yang ada di module fs tersedia dalam dua versi 
    versi asynchronous (default) dan versi synchronous */

// mengakses berkas pada komputer kita dapat menggunakan method fs.readFile()
// menerima tiga argumen yakni: lokasi berkas, encoding, dan callback function
const fs = require('fs');

const fileReadCallback = (error, data) => {
    if (error) {
        console.log('Gagal membaca berkas');
        return;
    }
    console.log(data);
};

fs.readFile('todo.txt', 'UTF-8', fileReadCallback);