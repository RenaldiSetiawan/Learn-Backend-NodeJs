// tidak semua data bisa diambil dari origin yang berbeda? Contohnya data JSON yang didapatkan melalui teknik XMLHTTPRequest atau fetch

// Origin terdiri dari tiga hal: protokol, host, dan port number. Origin dari aplikasi client kita adalah
// http://notesapp-v1.dicodingacademy.com

/* Origin web server kita saat ini adalah http://localhost:5000/ */

// mekanisme yang dapat membuat mereka saling berinteraksi. Mekanisme tersebut disebut Cross-origin resource sharing (CORS)

// kita hanya perlu memberikan nilai header ‘Access-Control-Allow-Origin’ dengan nilai origin luar yang akan mengkonsumsi datanya (aplikasi client)

// menggunakan tanda * pada nilai origin untuk memperbolehkan data dikonsumsi oleh seluruh origin
const response = h.response({ error: false, message: 'Catatan berhasil ditambahkan' });
 
response.header('Access-Control-Allow-Origin', '*');
 
return response;

// Dengan Hapi, CORS dapat ditetapkan pada spesifik route dengan menambahkan properti options.cors di konfigurasi route.
/* {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,
        options: {
            cors: {
                origin: ['*'],
            },
        },
    }, 
*/

// Bila ingin cakupannya lebih luas alias CORS diaktifkan di seluruh route yang ada di server, Anda bisa tetapkan CORS pada konfigurasi ketika hendak membuat server dengan menambahkan properti routes.cors.
/* 
    const server = Hapi.server({
    port: 5000,
    host: 'localhost',
        routes: {
            cors: {
                origin: ['*'],
            },
        },
    });
*/