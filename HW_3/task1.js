const fs = require('fs')

fs.mkdir('myFolder', (error) => {
  if (error) {
    console.log(error)
  } else {
    console.log('Папка успешно создана')
    fs.rmdir('myFolder', (error) => {
      if (error) {
        console.log(error)
      } else {
        console.log('Папка успешно удалена')
      }
    })
  }
})
