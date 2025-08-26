import express from 'express'
const app = express()

process.loadEnvFile()
const PORT = process.env.PORT || 3000

app.get('/', (_, res) => {
  res.send('Home work 6, node.js')
})


app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
