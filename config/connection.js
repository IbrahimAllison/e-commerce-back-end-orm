// Require for dotenv file
require('dotenv').config();

const Sequelize = require('sequelize');

// The line of codes uses .env file to protect identifiable or sensitive information like a password
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, 
    {
      host: 'localhost',
      dialect: 'mysql',
      // port: 3306,
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;