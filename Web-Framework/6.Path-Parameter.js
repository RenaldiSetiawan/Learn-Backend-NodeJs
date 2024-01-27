// Path dalam routing bisa dikatakan sebagai alamat yang digunakan client untuk melakukan permintaan ke server

// Hapi Framework teknik tersebut sangat mudah untuk diterapkan. Cukup dengan membungkus path dengan tanda { }
server.route({
    method: 'GET',
    path: '/users/{username}',
    handler: (request, h) => {
        const { username } = request.params;
        return `Hello, ${username}!`;
    },
});

// properti path terdapat bagian path yang ditulis {username}
// Nantinya parameter ini akan disimpan sebagai properti pada request.params
// Sebagai contoh, bila Anda melakukan permintaan ke server dengan alamat ‘/users/harry’, maka server akan menanggapi dengan ‘Hello, harry!’.

// Hapi Anda dapat membuat path parameter bersifat opsional
// Caranya dengan menambahkan tanda “?” di akhir nama parameternya
server.route({
    method: 'GET',
    path: '/users/{username?}',
    handler: (request, h) => {
        const { username = 'stranger' } = request.params;
        return `Hello, ${username}!`;
    },
});
// bila client meminta hanya pada path ‘/users’, server akan menanggapinya dengan ‘Hello, stranger!’.
