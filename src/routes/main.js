const express = require('express');
// const passport = require('passport');

// Creo una instancia de express para manejar rutas llamada Router.
const router = express.Router();

router.get('/', (request, response) => {
  response.send(`${__dirname}/../public/index.html`);
});

router.get('/status', (request, response) => {
  response.status(200).json({ message: 'ok', status: '200' });
});

/*
router.post('/signup', passport.authenticate('signup', { session: false }), async (request, response) => {
  response.status(200).json({ message: 'sign up was successful', status: '200' });
});
*/

// export default router;

module.exports = router;
