// server bisa merespons dengan memberikan data dalam tipe (MIME types) lain, seperti XML, JSON, gambar, atau sekadar teks biasa
// lampirkan property ‘Content-Type’ dengan nilai MIME types yang disisipkan pada header response
const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
};
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types

// Method setHeader() menerima dua parameter, yakni nama properti dan nilai untuk headernya
const newRequestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.setHeader('X-Powered-By', 'NodeJS');
};