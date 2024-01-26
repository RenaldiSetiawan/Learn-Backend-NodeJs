// Node.js menyediakan core modules http untuk membangun web server. 
// const http = require('http'); 

/* http.createServer() */
// method ini berfungsi untuk membuat HTTP server yang merupakan instance dari http.server
// Method ini menerima satu parameter custom callback yang digunakan sebagai request listener

const http = require('http');

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');

    response.statusCode = 200;
    response.end('<h1>Halo HTTP Server!!!</h1>');
};
// request merupakan objek yang menyimpan informasi terkait permintaan yang dikirimkan oleh client
// response merupakan objek yang digunakan untuk menanggapi permintaan

const server = http.createServer(requestListener);

/* Method listen() dapat menerima 4 parameter */
// port (number) : jalur yang digunakan untuk mengakses HTTP server
// hostname (string) : nama domain yang digunakan oleh HTTP server
// backlog (number) : maksimal koneksi yang dapat ditunda (pending) pada HTTP server
// listeningListener (function) : callback yang akan terpanggil ketika HTTP server sedang bekerja (listening)
const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});
