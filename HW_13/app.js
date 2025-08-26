import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import Article from './models/Article.js';
import Tag from './models/Tag.js';
import Publisher from './models/Publisher.js';
import Magazine from './models/Magazine.js';

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Home page');
});

app.listen(PORT, async () => {
  try {
    await connectDB();
    console.log(`Server running on port http://localhost:${PORT}`);
  } catch (error) {
    console.log(error);
  }
});
