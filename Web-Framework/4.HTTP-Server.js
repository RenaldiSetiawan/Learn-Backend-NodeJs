// Untuk membuat HTTP server menggunakan Hapi, kita tidak lagi menggunakan core module http secara langsung

// membuat server melalui modul pihak ketiga @hapi/hapi

// Untuk menggunakan modul tersebut, kita perlu memasang terlebih dahulu melalui NPM dengan perintah
//     >   npm install @hapi/hapi

// Berikut adalah dasar kode dalam membuat HTTP server pada Hapi:
const Hapi = require('@hapi/hapi');

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost'
    });

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
}

init();

// HTTP server sendiri dibuat melalui method Hapi.server()
// ServerOptions merupakan objek yang menampung konfigurasi dari server yang hendak dibuat, salah satunya kita bisa menetapkan properti port dan host
// Proses menjalankan server (server.start()) dilakukan secara asynchronous

// Silakan lakukan permintaan ke http://localhost:5000 melalui cURL. Perhatikan, server akan merespons seperti ini:
// {"statusCode":404,"error":"Not Found","message":"Not Found"}

// Hapi secara default akan mengembalikan response “Not Found” ketika tidak ada request handler yang menangani permintaannya.