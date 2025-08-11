import express from 'express';
import User from './models/user.js';
import sequelize from './config/db.js';

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

const authenticateUser = async (req, res, next) => {
  if (['/login', '/register'].includes(req.path)) {
    return next();
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(401).json({ message: 'Требуется email и пароль' });
  }

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ message: 'Пользователь не найден' });
    }

    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Неверный пароль' });
    }

    if (user.mustChangePassword && req.path !== '/change-password') {
      return res.status(403).json({
        message: 'Требуется сменить пароль',
        redirectTo: '/change-password',
      });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(500).json({ message: 'Ошибка сервера' });
  }
};

app.use(authenticateUser);

app.post('/register', async (req, res) => {
  try {
    const { email, password, role } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email и пароль обязательны' });
    }

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'Email уже зарегистрирован' });
    }

    const userData = { email, password };
    if (role && ['user', 'admin'].includes(role)) {
      userData.role = role;
    }

    const user = await User.create(userData);
    res.status(201).json({
      message: 'Пользователь успешно зарегистрирован',
      userId: user.id,
      role: user.role,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ message: 'Пользователь не найден' });
    }

    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Неверный пароль' });
    }

    res.json({
      message: 'Вход выполнен успешно',
      mustChangePassword: user.mustChangePassword,
    });
  } catch (error) {
    res.status(500).json({ message: 'Ошибка входа' });
  }
});

app.post('/change-password', async (req, res) => {
  try {
    const { email, currentPassword, newPassword } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ message: 'Пользователь не найден' });
    }

    const isPasswordValid = await user.comparePassword(currentPassword);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Неверный текущий пароль' });
    }
    user.password = newPassword;
    user.mustChangePassword = false;
    await user.save();
    res.json({ message: 'Пароль успешно изменен' });
  } catch (error) {
    res.status(500).json({ message: 'Ошибка смены пароля' });
  }
});

const requireRole = (role) => async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (
      !user ||
      !(await user.comparePassword(password)) ||
      user.role !== role
    ) {
      return res.status(403).json({ message: 'Недостаточно прав' });
    }
    next();
  } catch (error) {
    res.status(500).json({ message: 'Ошибка сервера' });
  }
};

app.post('/admin', requireRole('admin'), (req, res) => {
  res.json({
    success: true,
    message: 'Добро пожаловать в панель администратора',
  });
});

app.post('/delete-account', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ message: 'Пользователь не найден' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Неверный пароль' });
    }

    await user.destroy();
    res.json({ message: 'Аккаунт успешно удален' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log('Подключение к БД успешно');
    console.log(`Сервер запущен на http://localhost:${PORT}`);
  } catch (error) {
    console.error('Ошибка подключения к БД:', error);
    process.exit(1);
  }
});
