// stream juga dapat digunakan untuk menulis berkas
// Untuk membuat writable stream dalam menulis berkas gunakanlah method createWriteStream() dari core module fs
const fs = require('fs');
 
const write = fs.createWriteStream('output.txt');
// menerima satu argumen, alamat berkas untuk menyimpan hasil data yang dituliskan
// Berkas output akan dibuat secara otomatis jika tidak ada, namun bila berkas tersebut sudah ada, maka data sebelumnya akan tertimpa! Anda harus hati-hati yah!

// untuk menuliskan data pada writable stream, gunakan method write()
const fs = require('fs');
 
const writableStream = fs.createWriteStream('output.txt');
 
writableStream.write('Ini merupakan teks baris pertama!\n');
writableStream.write('Ini merupakan teks baris kedua!\n');
writableStream.end('Akhir dari writable stream!'); // Method end() digunakan untuk menandakan akhir dari writable stream sekaligus bisa digunakan sebagai penulisan writeable terakhir


