const Sequelize = require("sequelize");

const Episode = (sequelize, dataTypes) => {
  const cols = {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING,
    },
    number: {
      type: Sequelize.INTEGER,
    },
    release_date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    rating: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
    season_id: {
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
    tableName: "episodes",
    timestamps: false,
  };

  return sequelize.define("Episode", cols, config);
};

module.exports = Episode;
