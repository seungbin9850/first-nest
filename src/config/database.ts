import { Sequelize } from 'sequelize';
import config from './index';

export const sequelize = new Sequelize(
  config.mysql.name,
  config.mysql.username,
  config.mysql.password,
  {
    host: config.mysql.host,
    dialect: 'mysql',
    define: {
      timestamps: false,
    },
    timezone: '+09:00',
    dialectOptions: {
      dateStrings: true,
      typeCast: true,
    },
    pool: {
      max: 30,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
);
