import http from 'http'
import fs from 'fs'
import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT || 3001

const server = http.createServer((req, res) => {
  try {
    throw new Error('Ошибка сервера (тестовая)')
  } catch (err) {
    if (req.url !== '/favicon.ico') {
      const logMessage = `${new Date().toISOString()} - ${req.method} ${
        req.url
      } - ${err.message}\n`
      fs.appendFile('error.log', logMessage, (err) => {
        if (err) {
          console.error('Ошибка записи log в файл:', err)
        }
      })
      res.statusCode = 500
      res.setHeader('Content-Type', 'text/plain')
      res.end('Internal Server Error')
    }
  }
})

server.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`)
})
