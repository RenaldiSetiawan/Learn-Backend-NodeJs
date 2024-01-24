// Fungsi readFile baik versi asynchronous ataupun synchronous, bekerja dengan membaca berkas hingga selesai sebelum mengembalikan data
// Itu berarti bila Anda menggunakannya untuk mengakses berkas yang besar, maka akan membutuhkan waktu lama dan memori yang besar untuk mendapatkan hasilnya

// Solusinya adalah dengan menggunakan teknik stream
// Teknik ini tidak membaca berkas secara sekaligus, tapi dengan mengirim bagian demi bagian

// Teknik stream merupakan salah satu konsep fundamental yang mendukung aplikasi Node.js bekerja.
// Teknik ini dapat menangani kasus baca tulis berkas, komunikasi jaringan, atau beban kerja apapun agar dapat berjalan dengan lebih efisien

// membuat readable stream dengan menggunakan method createReadStream() dari core module fs
const fs = require('fs');

const readableStream = fs.createReadStream('./article.txt', {
    highWaterMark: 10
});

readableStream.on('readable', () => {
    try {
        process.stdout.write(`[${readableStream.read()}]`);
    } catch (error) {
       // catch the error when the chunk cannot be read.
    }
});

readableStream.on('end', () => {
    console.log('Done');
});

// createReadStream() menerima dua argumen. Yang pertama adalah lokasi berkas yang hendak dibaca, dan yang kedua adalah objek konfigurasi
// bisa menetapkan ukuran buffer melalui properti highWaterMark, Nilai default dari properti ini adalah 16384 bytes (16kb)
//  tidak perlu menetapkan properti ini bila ingin tetap memiliki nilai default. Namun karena kita hanya menggunakan berkas teks yang ukurannya sangat kecil, jadi kita buat ukuran buffer menjadi 10 bytes. Itu artinya berkas akan dibaca setiap 10 karakter (1 karakter = 1 bytes)
// createReadStream() mengembalikan EventEmitter
// readable akan dibangkitkan ketika buffer sudah memiliki ukuran sesuai dengan nilai yang ditetapkan pada properti highWaterMark
// Kemudian event end akan dibangkitkan setelah proses stream selesai.
