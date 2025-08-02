import express from 'express'
const app = express()
import { db } from './db.js'

process.loadEnvFile()
const PORT = process.env.PORT || 3001

app.use(express.json())

app.get('/product', async(req, res) => {
    try{
        const [rows] = await db.execute('SELECT * FROM products')
        res.json(rows)
    }
    catch(error){
        res.status(500).json({error: 'Ошибка при получении продуктов'})
    }
})

app.post('/product', async(req, res) => {
    const {name, price} = req.body
    if (!name || !price) {
        return res.status(400).json({error: 'Недостаточно данных'})
    }
    try{
     await db.execute('INSERT INTO products (name, price) VALUES (?, ?)', [name, price])
     res.json({message: 'Продукт успешно добавлен'})
    }
    catch(error){
        res.status(500).json({error: 'Ошибка при добавлении продукта'})
    }
})

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})