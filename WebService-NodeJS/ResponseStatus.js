// Response status merupakan salah satu bagian dari respons yang berisikan tentang informasi apakah sebuah request berhasil atau gagal dilakukan
// Status yang diberikan berupa kode (status code) dan pesan dari kode tersebut dalam bentuk teks (status message).
/* 
    tatus code haruslah bernilai 3 digit angka dengan ketentuan berikut:
        > 100-199 : informational responses.
        > 200 - 299 : successful responses
        > 300-399 : redirect
        > 400-499 : client error
        > 500-599 : server errors
*/

// ada Node.js, penetapan nilai status code pada response dilakukan melalui properti response.statusCode
const requestListener = (request, response) => {
    // memberitahu client bahwa request resource yang diminta tidak ada.
    response.statusCode = 404;
};