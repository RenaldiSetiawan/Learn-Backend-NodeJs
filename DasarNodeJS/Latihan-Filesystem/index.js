// TODO: tampilkan teks pada notes.txt pada console.
const fs = require('fs');

const readFile = (error, data) => {
    if (error) {
        console.log('File Berkas tidak ada!');
        return
    };
    console.log(data);
};

fs.readFile('notes.txt', 'UTF-8', readFile);