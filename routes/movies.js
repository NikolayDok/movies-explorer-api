const moviesRouter = require('express').Router();

const {
  createMovie,
  getMovies,
  deleteMovie,
} = require('../controllers/movies');

const {
  createMovieValidate,
  deleteMovieValidate,
} = require('../middlewares/validators-celebrate');

moviesRouter.get('/', getMovies);
moviesRouter.post('/', createMovieValidate, createMovie);
moviesRouter.delete('/:_Id', deleteMovieValidate, deleteMovie);

module.exports = moviesRouter;
