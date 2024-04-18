require('dotenv').config();
const express = require('express');
const path = require('path');
const { Sequelize } = require('sequelize');

const indexRouter = require('./routes/index');
const moviesRoutes = require('./routes/moviesRoutes');
const genresRoutes = require('./routes/genresRoutes');

const app = express();

// Configuración de Sequelize
const sequelize = new Sequelize(process.env.DB_DATABASE_DEV, process.env.DB_USERNAME_DEV, process.env.DB_PASSWORD_DEV, {
    host: process.env.DB_HOST_DEV,
    dialect: 'mysql',
    port: process.env.DB_PORT_DEV,
  });
  

// Comprobar la conexión a la base de datos
sequelize.authenticate()
  .then(() => {
    console.log('Conexión establecida correctamente.');
  })
  .catch(err => {
    console.error('Error de conexión:', err);
  });

// view engine setup
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, '../public')));
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use(moviesRoutes);
app.use(genresRoutes);

app.listen('3001', () => console.log('Servidor corriendo en el puerto 3001'));
