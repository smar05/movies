const db = require("../../database/models/index.js");

const apiList = async (req, res) => {
  let data = {};
  let status = 404;
  let url = "/api/movies";

  try {
    let movies = await db.Movie.findAll();
    status = 200;
    data = {
      meta: {
        status: 200,
        total: movies.length,
        url,
      },
      data: movies,
    };
  } catch (error) {
    status = 400;
    data = {
      meta: {
        status: 400,
        message: "Internal server error",
        url,
      },
    };
  }

  return res.status(status).json(data);
};
const apiDetail = async (req, res) => {
  let id = req.params.id;
  let status = 404;
  let url = `/api/movies/detail/${id}`;
  let data = {};

  if (id) {
    try {
      let movie = await db.Movie.findByPk(id);

      status = 200;
      data = {
        meta: {
          status: 200,
          url,
        },
        data: movie,
      };
    } catch (error) {
      status = 400;
      data = {
        meta: {
          status: 400,
          message: "Internal server error",
          url,
        },
      };
    }
  } else {
    status = 400;
    data = {
      meta: {
        status: 400,
        message: "No id specificated",
        url,
      },
    };
  }

  return res.status(status).json(data);
};

module.exports = {
  apiList,
  apiDetail,
};
