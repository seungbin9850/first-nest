import { config } from 'dotenv';

config();

export default {
  mysql: {
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
  },
  secretKey: process.env.JWT_SECRET,
};
