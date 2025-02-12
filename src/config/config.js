require("dotenv").config(); // 👈 Garante que o .env seja carregado

const config = {
  username: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "senha_mysql",
  database: process.env.MYSQL_DATABASE || "orm_exercices",
  host: process.env.MYSQL_HOST || "localhost",
  port: process.env.MYSQL_PORT || 3306,
  dialect: "mysql",
};

module.exports = {
  development: config,
  test: config,
  production: config,
};
