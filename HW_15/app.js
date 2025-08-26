import express from 'express';
import dotenv from 'dotenv';
import { Server } from 'socket.io';
import http from 'http';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (_, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

io.on('connection', (socket) => {
  console.log('A User connected', socket.id);

  socket.on('chat message', (msg) => {
    console.log('Message: ' + msg);

    io.emit('chat message', msg);

    socket.emit('message status', `✅ Сервер получил: "${msg}"`);
  });

  socket.on('disconnect', () => {
    console.log('A User disconnected', socket.id);
  });
});

server.listen(PORT, () =>
  console.log(`Server started at http://localhost:${PORT}`)
);
