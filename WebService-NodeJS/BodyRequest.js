// client melakukan permintaan dengan method POST atau PUT
// biasanya permintaan tersebut memiliki sebuah data yang disimpan pada body request
// data pada body bisa berupa format teks, JSON, berkas gambar, atau format lainnya

// Data di body didapatkan dengan teknik stream
// memanfaatkan EventEmitter untuk mengirimkan bagian-bagian datanya
//  Dalam kasus http.clientRequest event data dan end-lah yang digunakan untuk mendapatkan data body

const reqListener = (request, response) => {
    let body = [];

    request.on('data', (chunk) => {
        body.push(chunk);
    });

    request.on('end', () => {
        body = Buffer.contact(body).toString();
    })
};

/* 
    > dekalarasi variabel body dean inisialisasi nilai dengan array kosonh, fungsi untuk menampung buffer pada stream
    > ketika event data terjadi pada request, kita isi array body dengan chunk (potongan data) yang dibawa callback function pada event tersebut.\
    > etika proses stream berakhir, maka event end akan terbangkitkan. Di sinilah kita mengubah variabel body yang sebelumnya menampung buffer menjadi data sebenarnya dalam bentuk string melalui perintah Buffer.concat(body).toString()
*/