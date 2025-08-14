import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 3001;
const BASE_URL = `http://localhost:${PORT}/`;

async function testLogin() {
  try {
    const response = await axios.post(BASE_URL + 'login', {
      email: 'email1@email.com',
      password: 'password1',
    });
    console.log(response.data);
    return response.data.token;
  } catch (error) {
    console.error(error);
  }
}

async function testUpdateEmail(token) {
  try {
    const response = await axios.put(
      BASE_URL + 'update-email',
      {
        newEmail: 'email4@email.com',
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

(async () => {
  try {
    const token = await testLogin();
    if (!token) return console.log('Login failed');
    await testUpdateEmail(token);
  } catch (error) {
    console.error(error);
  }
})();
