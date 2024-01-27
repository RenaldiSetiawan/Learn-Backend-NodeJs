// Node.js, untuk mendapatkan data pada body request--meskipun datanya hanya sebatas teks--kita harus berurusan dengan Readable Stream

// Ketika menggunakan Hapi, Anda tidak lagi berurusan dengan stream untuk mendapatkan datanya

// Hapi secara default akan mengubah payload JSON menjadi objek JavaScript. Dengan begitu, Anda tak lagi berurusan dengan JSON.parse()

// Kapan pun client mengirimkan payload berupa JSON, payload tersebut dapat diakses pada route handler melalui properti request.payload
server.route({
    method: 'POST',
    path: '/login',
    handler: (request, h) => {
        const { username, password } = request.payload;


        return `Welcome ${username}!`;
    },
});

//  handler menerima payload melalui request.payload
// { "username": "harrypotter", "password": "encryptedpassword" }