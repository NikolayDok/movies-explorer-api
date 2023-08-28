const router = require('express').Router();

const {  signInUserValidate, signUpUserValidate } = require('../middlewares/validators-celebrate');

const NotFoundError = require('../errors/NotFoundError');

const moviesRoutes = require('./movies');
const usersRoutes = require('./users');
const { login, createUser } = require('../controllers/users');
const auth = require('../middlewares/auth');

router.post('/signup', signUpUserValidate, createUser);
router.post('/signin', signInUserValidate, login);

router.use('/users', auth, usersRoutes);
router.use('/movies', auth, moviesRoutes);

router.all('*', auth, (req, res, next) => {
  next(new NotFoundError('Неверный адрес'));
});

module.exports = router;
