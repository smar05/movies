const Sequelize = require("sequelize");
const sequelize = require("../../database");

const cols = {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  rating: {
    type: Sequelize.DECIMAL,
    allowNull: false,
  },
  awards: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  releaseDate: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  length: {
    type: Sequelize.INTEGER,
  },
  genreId: {
    type: Sequelize.INTEGER,
  },
  createdAt: {
    type: DataTypes.DATE,
  },
  updatedAt: {
    type: DataTypes.DATE,
  },
};
const config = {
  tableName: "movies",
};

const Movie = sequelize.define("Movie", cols, config);

module.exports = Movie;
