import express from 'express';
import Book from './models/book.js';
import sequelize from './config/db.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/books', async (_req, res) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/books', async (req, res) => {
  try {
    const { title, author, year } = req.body;
    const book = await Book.create({ title, author, year });
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.put('/books/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, year } = req.body;
    
    const [updated] = await Book.update(
      { title, author, year },
      { where: { id } }
    );
    
    if (updated) {
      const updatedBook = await Book.findByPk(id);
      res.json(updatedBook);
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.delete('/books/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Book.destroy({ where: { id } });
    
    if (deleted) {
      res.json({ message: 'Book deleted' });
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        console.log(`Server is running on http://localhost:${PORT}`);
    } catch (error) {
        console.error('Unable to connect to the database: ', error);
        process.exit(1);
    }
});