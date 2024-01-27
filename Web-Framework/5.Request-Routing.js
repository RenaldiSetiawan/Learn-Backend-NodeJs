// Routing pada Hapi tidak dilakukan di dalam request handler seperti cara native

// Routing pada Hapi tidak dilakukan di dalam request handler seperti cara native
// Namun, ia memanfaatkan objek route configuration yang disimpan pada method server.route()
// https://hapi.dev/api/?v=20.3.0#-serverrouteroute

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {

            return 'Hello World';
        }
    });

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};

// Objek route configuration memiliki properti yang bisa dimanfaatkan untuk menspesifikasikan route yang diinginkan
// Termasuk menspesifikasikan method, path, dan fungsi sebagai handler untuk menangani permintaan tersebut (request handler)

// Handler pada Hapi dipisahkan berdasarkan route yang ada
// server.route() selain dapat menerima route configuration, ia juga dapat menerima array dari route configuration
// bagaimana cara menetapkan lebih dari satu route configuration dalam method server.route()
const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Homepage';
        },
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About page';
        },
    },
];
 
module.exports = routes;