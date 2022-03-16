const db = require("../database/models/index.js");

const list = async (req, res) => {
  try {
    let genres = await db.Genre.findAll();
    return res.render("../views/genresList.ejs", { genres });
  } catch (error) {
    return console.error(error);
  }
};

const detail = async (req, res) => {
  let id = req.params.id;
  if (id) {
    try {
      let genre = await db.Genre.findByPk(id);
      return res.render("../views/genresDetail.ejs", { genre });
    } catch (error) {
      return console.log(error);
    }
  }
};

//Api controller
const apiList = async (req, res) => {
  let data = {};
  let status = 404;
  let url = "/api/genres";

  try {
    let genres = await db.Genre.findAll();
    status = 200;
    data = {
      meta: {
        status: 200,
        total: genres.length,
        url,
      },
      data: genres,
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
  let url = `/api/genres/detail/${id}`;
  let data = {};

  if (id) {
    try {
      let genre = await db.Genre.findByPk(id);

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
  list,
  detail,
  //Api methods
  apiList,
  apiDetail,
};
