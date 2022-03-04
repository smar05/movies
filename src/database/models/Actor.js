const Sequelize = require("sequelize");

const Actor = (sequelize, dataTypes) => {
  const cols = {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firs_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    last_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    rating: {
      type: Sequelize.DECIMAL,
    },
    favorite_movie_id: {
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
    tableName: "actors",
    timestamps: false,
  };

  return sequelize.define("Actor", cols, config);
};

module.exports = Actor;
