/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */
const fs = require('fs');

const readWrite = async () => {
    const readStream = fs.createReadStream("./input.txt")
    const writeStream = fs.createWriteStream("./output.txt")
  
    writeStream.on("repeat", () => {
      readStream.resume()
    })
  
    readStream.on("data", (chunk) => {
      if (!writeStream.write(chunk)) {
        readStream.pause()
      }
    })
  
    readStream.on("end", () => {
      readStream.close()
    })
  }
  
  readWrite()