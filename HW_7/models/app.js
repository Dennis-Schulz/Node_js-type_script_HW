import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const App = sequelize.define(
  'App',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    size: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
        min: 0,
      },
    },
  },
  {
    timestamps: false,
    tableName: 'Apps',
  }
);

export default App;
