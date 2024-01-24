/* EVENTS */

// Aplikasi Node.js biasanya dikenal memiliki pola event-driven atau memiliki alur berdasarkan suatu kejadian

// Node.js menyediakan EventEmitter class yang merupakan member events core module:
const { EventEmitter } = require('events');

const myEventEmitter = new EventEmitter();

// instance dari EventEmitter akan memiliki fungsi on
// Pada fungsi tersebut, kita dapat menentukan aksi berdasarkan sebuah kejadian
const makeCoffe = ({ name }) => {
    console.log(`Kopi ${name} telah dibuat`);
};

// Fungsi on menerimas dua argument, yg pertama nama event, yg kedua listener atau fungsi yang akan di eksekusi ketiak event terjadi
myEventEmitter.on('coffee-order', makeCoffe);

// cara membangkitkan suatu event? Setiap instance dari EventEmitter juga memiliki fungsi emit() yang berguna untuk membangkitkan event.
myEventEmitter.emit('coffee-order', { name: 'Tubruk' });

// emit(), menerima nilai argument sebanyak apapun
// nilai yang pertama merupakan nama dari event yang akan dibangkitkan
// argumen kedua dan seterusnya adalah nilai yang akan digunakan untuk menjadi dari parameter fungsi listener

// bisa mendaftarkan lebih dari satu fungsi listener pada sebuah event menggunakan fungsi on.
const firstName = (yourName) => {
    console.log(`Nama saya ${yourName}`);
};

const location = (city) => {
    console.log(`Saya tinggal di ${city}`);
};

const onListener = ({ yourName, city }) => {
    firstName(yourName);
    location(city);
};

myEventEmitter.on('Introduction', onListener);
myEventEmitter.emit('Introduction', { yourName: 'Renal', city: 'Jakarta' });

