const db = require("../database/models/index.js");

const list = async (req, res) => {
  let movies = [];
  try {
    movies = await db.Movie.findAll();
  } catch (error) {
    console.error(error);
  }
  res.render("../views/moviesList.ejs", { movies });
};

const detail = async (req, res) => {
  let id = req.params.id;
  let movie = {};

  if (id) {
    try {
      movie = await db.Movie.findByPk(id);
    } catch (error) {
      console.error(error);
    }
  }

  res.render("../views/moviesDetail.ejs", { movie });
};

const newesMovies = async (req, res) => {
  let movies = [];
  try {
    movies = await db.Movie.findAll({ order: [["release_date", "DESC"]] });
  } catch (error) {
    console.error(error);
  }
  res.render("../views/newestMovies.ejs", { movies });
};

const recomended = async (req, res) => {
  let movies = [];
  try {
    movies = await db.Movie.findAll({
      order: [["release_date", "DESC"]],
      limit: 5,
    });
  } catch (error) {
    console.error(error);
  }
  res.render("../views/recommendedMovies.ejs", { movies });
};

module.exports = {
  list,
  detail,
  newesMovies,
  recomended,
};
