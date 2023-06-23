const { celebrate, Joi } = require('celebrate');
const { regExUrl } = require('../utils/constants');

const signInUserValidate = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
});

const signUpUserValidate = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

const updateUserValidate = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().required().email(),
  }),
});

const createMovieValidate = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().integer().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required().regex(regExUrl),
    trailerLink: Joi.string().required().regex(regExUrl),
    thumbnail: Joi.string().required().regex(regExUrl),
    movieId: Joi.number().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
});

const deleteMovieValidate = celebrate({
  params: Joi.object().keys({
    _id: Joi.string().length(24).required().hex(),
  }),
});

module.exports = {
  updateUserValidate,
  signInUserValidate,
  signUpUserValidate,
  createMovieValidate,
  deleteMovieValidate,
};