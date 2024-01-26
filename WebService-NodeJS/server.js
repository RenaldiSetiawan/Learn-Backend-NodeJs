/* Latihan Handling Request */

/* const http = require('http');

const requestListener = (request, response) => {
    response.setHeader('Content-type', 'text/html');
    response.statusCode = 200;

   
    const { method } = request;

    if (method === 'GET') {
        response.end('<h1>Request GET</h1>')
    };

    //Latihan Mendapatkan Body Request start
    if (method === 'POST') {
        let body = [];

        request.on('data', (chunk) => {
            body.push(chunk);
        });

        request.on('end', () => {
            body = Buffer.concat(body).toString();
            response.end(`<h1>Hai, ${body}!</h1>`);
        });
    }
    // Latihan Mendapatkan Body Request start

    if (method === 'PUT') {
        response.end('Request PUT')
    };

    if (method === 'DELETE') {
        response.end('Request DELETE')
    };
};

const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
}); */


// coba lakukan permintaan ke server dengan menggunakan method yang berbeda melalui cURL
/* 
    curl -X GET http://localhost:5000
    
    curl -X POST -H "Content-Type: application/json" http://localhost:5000 -d "{\"name\": \"Renal\"}"

    curl -X PUT http://localhost:5000

    curl -X DELETE http://localhost:5000
*/

// Latihan Routing Request start
const http = require('http');

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;

    const { method, url } = request;

    if (url === '/') {
        if (method === 'GET') {
            response.end('<h1>Ini adalah homepage</h1>');
        } else {
            response.end(`<h1>Halaman tidak dapat diakses dengan ${method} request</h1>`);
        }
    } else if (url === '/about') {
        if (method === 'GET') {
            response.end('<h1>Halo! Ini adalah halaman about</h1>')
        } else if (method === 'POST') {
            let body = [];

            request.on('data', (chunk) => {
                body.push(chunk);
            });

            request.on('end', () => {
                body = Buffer.concat(body).toString();
                const { name } = JSON.parse(body);
                response.end(`<h1>Halo, ${name}! Ini adalah halaman about</h1>`);
            });
        } else {
            response.end(`<h1>Halaman tidak dapat diakses menggunakan ${method} request</h1>`);
        }
    } else {
        response.end('<h1>Halaman tidak ditemukan!</h1>');
    }
};

const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});
// Latihan Routing Request end