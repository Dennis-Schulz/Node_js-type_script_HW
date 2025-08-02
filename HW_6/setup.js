import { db } from './db.js'

await db.execute(`
CREATE TABLE IF NOT EXISTS products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL
)`)

console.log('Database is ready')

process.exit(0)
