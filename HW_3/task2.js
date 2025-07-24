const fs = require('fs')

const nameFile = 'info.txt'
const textFile =  'Node.js is awesome!'


fs.writeFile(nameFile, textFile, 'utf8', (error) => {
    if (error) {
        console.log(error)
    } else {
        console.log(`Файл с именем ${nameFile} успешно создан, содержит ${textFile}`)
        fs.readFile(nameFile, 'utf8', (error, data) => {
            if (error) {
                console.log(error)
            } else {
                console.log(`Содержимое файла ${nameFile}: ${data}`)
            }
        })
    }
})
