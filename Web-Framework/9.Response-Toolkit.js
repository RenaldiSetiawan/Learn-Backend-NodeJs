// Fungsi handler pada Hapi memiliki dua parameters, yakni request dan h.

// request parameter merupakan objek yang menampung detail dari permintaan client, seperti path dan query parameters, payload, headers, dan sebagainya
// Parameter yang kedua yaitu h (huruf inisial Hapi). Parameter ini merupakan response toolkit di mana ia adalah objek yang menampung banyak sekali method yang digunakan untuk menanggapi sebuah permintaan client.

// Parameter h tidak hanya berfungsi untuk menetapkan status kode respons. Melalui h, Anda juga bisa menetapkan header response, content type, content length, dan masih banyak lagi.
// Detailed notation
const handler = (request, h) => {
    const response = h.response('success');
    response.type('text/plain');
    response.header('X-Custom', 'some-value');
    return response;
};
 
// Chained notation
const newHandler = (request, h) => {
    return h.response('success')
        .type('text/plain')
        .header('X-Custom', 'some-value');
};