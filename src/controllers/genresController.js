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

module.exports = { list, detail };
