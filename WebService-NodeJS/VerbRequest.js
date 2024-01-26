// Untuk mendapatkan nilai method dari request, gunakanlah properti request.method
const requestListener = (request, response) => {
    const method = request.method;
};

// bisa menggunakan cara yang lebih clean dengan menggunakan object destructuring
const newRequestListener = (request, response) => {
    const { method } = request;
};

// Properti method bernilai tipe method dalam bentuk string
// Nilainya dapat berupa “GET”, “POST”, “PUT”, atau method lainnya sesuai dengan yang client

//  Dengan memiliki nilai method, kita bisa memberikan respons berbeda berdasarkan tipe method-nya
const reqListener = (request, response) => {
    const { method } = request;
 
    if(method === 'GET') {
        // response ketika GET
    }
 
    if(method === 'POST') {
        // response ketika POST
    }
 
    // Anda bisa mengevaluasi tipe method lainnya
};