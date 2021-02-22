import { sequelize } from '../config/database';
import Sequelize, { Model } from 'sequelize';

export class User extends Model {
  userId: string;
  password: string;
  name: string;
}

User.init(
  {
    userId: {
      type: Sequelize.STRING(15),
      primaryKey: true,
    },
    password: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING(20),
      allowNull: false,
    },
  },
  { sequelize, modelName: 'user', tableName: 'user' },
);
