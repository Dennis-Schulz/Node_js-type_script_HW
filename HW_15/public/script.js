const socket = io();

const form = document.getElementById('formSendMessage');
const input = form.querySelector('input');
const messages = document.getElementById('messages');
const statusDiv = document.getElementById('status');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (input.value.trim()) {
    socket.emit('chat message', input.value);
    input.value = '';
  }
});

socket.on('chat message', (msg) => {
  const message = document.createElement('li');
  message.textContent = msg;
  messages.appendChild(message);

  messages.scrollTop = messages.scrollHeight;
});

socket.on('message status', (statusMsg) => {
  statusDiv.textContent = statusMsg;
  setTimeout(() => {
    statusDiv.textContent = '';
  }, 3000);
});
