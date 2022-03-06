const Sequelize = require("sequelize");

const Movie = (sequelize, dataTypes) => {
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
    release_date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    length: {
      type: Sequelize.INTEGER,
    },
    genre_id: {
      type: Sequelize.INTEGER,
    },
    created_at: {
      type: Sequelize.DATE,
    },
    updated_at: {
      type: Sequelize.DATE,
    },
  };
  const config = {
    tableName: "movies",
    timestamps: false,
  };

  return sequelize.define("Movie", cols, config);
};

module.exports = Movie;
