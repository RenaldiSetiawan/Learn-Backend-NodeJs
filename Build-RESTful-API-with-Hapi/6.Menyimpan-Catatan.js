// 1. buka berkas routes.js 
const routes = [
    {
        method: 'POST',
        path: '/notes',
        handler: () => { },
    },
];

module.exports = routes;
// 2. Jangan lupa untuk menuliskan module.exports = routes, agar routes dapat digunakan oleh berkas server.js

// 3. buat dulu array untuk menampung objek catatan pada berkas notes.js
const notes = [];
 
module.exports = notes;

// 4. Silakan buka berkas handler.js dan buat fungsi dengan nama “addNoteHandler”
// ungsi handler pada Hapi memiliki dua parameters? Jadi, jangan lupa untuk menambahkan parameter tersebut setiap kali membuat fungsi handler

// 5. untuk mengekspor fungsi handler ini, kita gunakan objek literals. untuk memudahkan ekspor lebih dari satu nilai pada satu berkas JavaScript
const addNoteHandler = (request, h) => {
    const { title, tags, body } = request.payload;
    const id = nanoid(16);
};
 
module.exports = { addNoteHandler };

// Kriteria menyebutkan, properti id merupakan string dan harus unik, kita akan menggunakan bantuan library pihak ketiga untuk menghasilkan nilainya. nanoid merupakan salah satu library yang populer untuk menangani ini
// 6. Jadi, silakan pasang library tersebut dengan perintah. npm install nanoid@3
// kita hanya perlu memanggil method nanoid() dan memberikan parameter number yang merupakan ukuran dari string-nya