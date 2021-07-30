const express = require('express');
const mongoose = require('mongoose');

// Routes
const routes = require('./routes/main');

// Variables en Archivo .env
require('dotenv').config();

// setup mongo connections
const uri = process.env.MONGO_CONNECTION_URL;
const mongoConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};
if (process.env.MONGO_USER && process.env.MONGO_PASSWORD) {
  mongoConfig.auth = { authSource: 'admin' };
  mongoConfig.user = process.env.MONGO_USER;
  mongoConfig.pass = process.env.MONGO_PASSWORD;
}

mongoose.connect(uri, mongoConfig);

// if there is no connection to db we exit the app!
mongoose.connection.on('error', (error) => {
  console.log(error);
  console.log('Base de Datos no encontrada');
  process.exit(1);
});

const app = express();

// Defino un puerto para el server
const port = process.env.PORT || 3000; // Defino un Puerto a Usar por el Server.

// Make folder public be aviable as public content
app.use(express.static(`${__dirname}/public/`));

// setup routes
app.use('/', routes);

// server start listening when bd connection is establish.
mongoose.connection.on('connected', () => {
  console.log('connected to mongo');
  app.listen(port, () => {
    console.log(`Server is Running in Port: ${port}`);
  });
});
