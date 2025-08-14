import express from 'express';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

dotenv.config();
const PORT = process.env.PORT || 3001;

const users = [
  {
    id: 1,
    username: 'user1',
    email: 'email1@email.com',
    password: bcrypt.hashSync('password1', 10),
  },
  {
    id: 2,
    username: 'user2',
    email: 'email2@email.com',
    password: bcrypt.hashSync('password2', 10),
  },
];

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const SECRET_KEY = process.env.SECRET_KEY;
if (!SECRET_KEY) {
  console.error('SECRET_KEY is not defined');
  process.exit(1);
}

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email);
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }
  const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: '1h' });
  res.json({ token });
});

app.put('/update-email', authenticateToken, (req, res) => {
  const { newEmail } = req.body;
  const { id } = req.user;
  const user = users.find((u) => u.id === id);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  if (!newEmail) {
    return res.status(400).json({ error: 'New email is required' });
}
  const existingUser = users.find((u) => u.email === newEmail);
  if (existingUser) {
    return res.status(400).json({ error: 'Email already exists' });
  }
  user.email = newEmail;
  res.json({
    message: 'Email updated successfully',
    user: {
      id: user.id,
      username: user.username,
      email: user.email,
    },
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
