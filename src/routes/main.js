import express from 'express';

// Creo una instancia de express para manejar rutas llamada Router.
const router = express.Router();

router.get('/', (request, response) => {
  response.send(`${__dirname}/index.html`);
});

router.get('/status', (request, response) => {
  response.status(200).json({ message: 'ok', status: '200' });
});

export default router;
