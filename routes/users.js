const usersRoutes = require('express').Router();

const {
  getUser,
  updateProfile,
} = require('../controllers/users');

const {
  updateUserValidate,
} = require('../middlewares/validators-celebrate');

usersRoutes.get('/me', getUser);
usersRoutes.patch('/me', updateUserValidate, updateProfile);

module.exports = usersRoutes;
