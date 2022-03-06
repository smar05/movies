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

const add = (req, res) => {
  res.render("../views/moviesAdd.ejs");
};

const create = async (req, res) => {
  let { title, rating, awards, release_date, length } = req.body;

  try {
    await db.Movie.create({
      title,
      rating,
      awards,
      release_date,
      length,
      created_at: Date.now(),
      updated_at: Date.now(),
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  list,
  detail,
  newesMovies,
  recomended,
  add,
  create,
};
