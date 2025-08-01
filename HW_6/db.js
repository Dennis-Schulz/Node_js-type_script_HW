import mysql from 'mysql2/promise'

process.loadEnvFile()

export const db = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'product_db'
})