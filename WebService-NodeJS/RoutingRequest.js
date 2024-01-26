// hal yang perlu kita cek selain method adalah URL atau alamat yang dituju dari request tersebut
//  Routing merupakan istilah dalam menentukan respons server berdasarkan path atau url yang diminta oleh client
const requestListener = (request, response) => {
    const { url } = request;
};
// Properti url akan mengembalikan nilai path secara lengkap tanpa host dan port yang di gunakan server
const newRequestListener = (request, response) => {
    const { url } = request;
 
    if(url === '/') {
        // curl http://localhost:5000/
    }
 
    if(url === '/about') {
        // curl http://localhost:5000/about
    }
 
    // curl http://localhost:5000/<any>
};
