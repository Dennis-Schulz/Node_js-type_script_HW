import express from 'express';
import dotenv from 'dotenv';
import { connectToDatabase } from './db/index.js';
import { ObjectId } from 'mongodb';

const app = express();

dotenv.config();
const PORT = process.env.PORT || 3000;

connectToDatabase()
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Server started on http://localhost:${PORT}`)
    );
  })
  .catch((error) => console.log('Failed to connect to database', error));

app.use(express.json());

const productsRouter = express.Router();


productsRouter.use(async (req, res, next) => {
  try {
    const db = await connectToDatabase();
    req.productsCollection = db.collection('products');
    next();
  } catch (error) {
    res.status(500).json({ error: 'Database connection error' });
  }
});


productsRouter.post('/', async (req, res) => {
  try {
    const { name, price, description } = req.body;
    if (!name || !price) {
      return res.status(400).json({ error: 'Name and price are required' });
    }

    const result = await req.productsCollection.insertOne({
      name,
      price: Number(price),
      description: description || '',
      createdAt: new Date()
    });

    res.status(201).json({ id: result.insertedId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


productsRouter.get('/', async (req, res) => {
  try {
    const products = await req.productsCollection.find().toArray();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


productsRouter.get('/:id', async (req, res) => {
  try {
    const product = await req.productsCollection.findOne({
      _id: new ObjectId(req.params.id)
    });

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


productsRouter.put('/:id', async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const updateData = {};

    if (name) updateData.name = name;
    if (price) updateData.price = Number(price);
    if (description) updateData.description = description;

    const result = await req.productsCollection.updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: updateData }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json({ message: 'Product updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


productsRouter.delete('/:id', async (req, res) => {
  try {
    const result = await req.productsCollection.deleteOne({
      _id: new ObjectId(req.params.id)
    });

    if (result.deletedCount === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.use('/products', productsRouter);