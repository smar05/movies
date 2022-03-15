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

const add = async (req, res) => {
  try {
    listGenres = await db.Genre.findAll();
  } catch (error) {
    console.error(error);
  }
  res.render("../views/moviesAdd.ejs", { listGenres });
};

const create = async (req, res) => {
  let { title, rating, awards, release_date, length, genre } = req.body;

  try {
    await db.Movie.create({
      title,
      rating,
      awards,
      release_date,
      length,
      genre_id: genre,
      created_at: Date.now(),
      updated_at: Date.now(),
    });
  } catch (error) {
    console.error(error);
  }
};

const edit = async (req, res) => {
  let id = req.params.id;
  let movie = {};
  let listGenres = [];

  if (id) {
    try {
      movie = await db.Movie.findByPk(id, {
        include: [
          {
            model: db.Genre,
            as: "Genre",
          },
        ],
      });
      listGenres = await db.Genre.findAll();
      movie.release_date = movie.release_date.valueOf();
    } catch (error) {
      console.error(error);
    }
  }

  console.log(movie);
  return res.render("../views/moviesEdit.ejs", { movie, listGenres });
};

const update = async (req, res) => {
  let id = req.params.id;
  let { title, rating, awards, release_date, length } = req.body;

  if (id) {
    try {
      await db.Movie.update(
        {
          title,
          rating,
          awards,
          release_date,
          length,
          updated_at: Date.now(),
        },
        {
          where: { id },
        }
      );
    } catch (error) {
      console.error(error);
    }
  }
};

const deleteMovie = async (req, res) => {
  let id = req.params.id;
  if (id) {
    try {
      await db.Movie.destroy({ where: { id: id } });
    } catch (error) {
      console.error(error);
    }
  }
};

module.exports = {
  list,
  detail,
  newesMovies,
  recomended,
  add,
  create,
  edit,
  update,
  deleteMovie,
};
