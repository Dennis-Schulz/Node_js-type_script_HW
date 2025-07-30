import http from 'http'
import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT || 3001

const server = http.createServer((req, res) => {
  const { method } = req
  switch (method) {
    case 'PUT':
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/plain')
      res.end('PUT-запрос обработан')
      break
    case 'DELETE':
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/plain')
      res.end('DELETE-запрос обработан')
      break
    default:
      res.statusCode = 405
      res.setHeader('Content-Type', 'text/plain')
      res.end('Метод не поддерживается')
  }
})

server.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`)
})
