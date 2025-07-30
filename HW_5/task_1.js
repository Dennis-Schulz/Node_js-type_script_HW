import http from 'http'
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 3001

const server = http.createServer((req, res) => {
  const autoHeader = req.headers['authorization']
  res.setHeader('Content-Type', 'text/plain')

  if (!autoHeader) {
    res.statusCode = 401
    res.end('Unauthorized')
  } else {
    res.statusCode = 200
    res.end('Authorization header received')
  }
})

server.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`)
})
