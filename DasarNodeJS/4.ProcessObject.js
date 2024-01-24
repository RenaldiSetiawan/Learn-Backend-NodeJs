/* Process Object */
// Salah satu global objek yang penting untuk diketahui adalah process
// Pada Node.js, global objek process memiliki fungsi dan properti yang dapat memberikan informasi mengenai proses yang sedang berjalan

// (process.env) Melalui properti ini kita dapat menyimpan nilai atau mendapatkan informasi mengenai environment yang digunakan selama proses sedang berlangsung
// process.env memiliki properti process.env.PWD yang menyediakan informasi mengenai lokasi di mana proses dijalankan
// process.env.USER menyimpan informasi nama user pada komputer Anda
// Daftar lengkap https://nodejs.org/dist/latest-v8.x/docs/api/process.html#process_process_env

// tambahkan installasi module hapi > npm i @hapi/hapi

const Hapi = require('@hapi/hapi');

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: process.env.NODE_ENV !== 'production' ? 'localhost' : '',
    });
    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};
init();

/*  Untuk memberikan nilai pada properti process.env, kita dapat memberikannya ketika mengeksekusi berkas JavaScript. Caranya seperti ini:
    SET NODE_ENV=production && node nama-File.js */