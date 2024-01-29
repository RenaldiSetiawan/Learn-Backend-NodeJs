// Mari kita mulai dengan membuat HTTP server menggunakan Hapi framework.

/* 1.  pasang package @hapi/hapi -> npm install @hapi/hapi */

// 2. berkas server.js dan ganti kode yang ada dengan kode dalam membuat server menggunakan Hapi
const Hapi = require('@hapi/hapi');
 
const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
  });
 
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};
 
init();

// 3. lalu jalankan server dengan nodemon melalui perintah npm run start

/* 4. Silakan buka browser dan coba akses url http://localhost:5000. Jika pada browser
      {"statusCode":404,"error":"Not Found","message":"Not Found"} */

// 5. Itu berarti server HTTP sudah terbuat dan berjalan

/* 6 . Sampai di sini Anda sudah bisa menghubungkan alamat localhost:5000 (web server) dengan aplikasi client. 
       Silakan pilih “Change URL” pada : http://notesapp-v1.dicodingacademy.com/. */

// 7. Lalu, isi dengan host beserta port dari web server yang Anda buat. Contohnya “localhost:5000”

// 8 . Setelah Anda melihat URL dari web server, maka web server dan aplikasi client sudah terhubung

/* 9. Jika Anda menggunakan ESLint, ada satu hal yang perlu diperhatikan. 
      Bila ada warning atau error yang diberikan oleh ESLint namun hal itu tidak Anda setujui atau ingin Anda hiraukan,
      maka Anda bisa menonaktifkan warning atau eror tersebut.
      Contohnya, bila Anda menggunakan code style AirBnB, maka penggunaan console akan dianggap warning */

/* 10. bisa menonaktifkan aturan no-console pada berkas .eslintrc.json dengan menambahkan properti no-console dengan nilai off pada rules 
       "rules": {
            "no-console": "off"
        }

        Dengan begitu, warning dari ESLint akan hilang untuk penggunaan console
        
*/
