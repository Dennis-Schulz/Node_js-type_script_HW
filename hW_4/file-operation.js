const fs = require('fs');
require('dotenv').config();

const filePath = process.env.FILENAME;

fs.writeFile(filePath, 'Hello World', (err) => {
    if (err) return console.log(`Ошибка записи файла: ${err}`);
    console.log(`Файл ${filePath} успешно записан!`);
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) return console.log(`Ошибка чтения файла: ${err}`);
        console.log(`Файл ${filePath} содержит: ${data}`);
    })
})