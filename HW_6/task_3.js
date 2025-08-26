import express from 'express'
const app = express()

process.loadEnvFile()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (_, res) => {
  try {
    res.send('Hello World!!')
  } catch (error) {
    res.status(500).send(error.message)
  }
})

app.post('/', (req, res) => {
   const{userId, userName} = req.body
    if(!userId || !userName){
        return res.status(400).send('Bad request')
    }
        res.send(`userId: ${userId}, userName: ${userName}`)
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
