// objek response yang berada pada parameter fungsi request listener adalah instance dari http.serverResponse
// ntuk menuliskan data pada respons kita bisa gunakan method response.write() dan diakhiri dengan method response.end()
const requestListener = (request, response) => {
    response.write('<html>');
    response.write('<body>');
    response.write('<h1>Hello, World!</h1>');
    response.write('</body>');
    response.write('</html>');
    response.end();
};