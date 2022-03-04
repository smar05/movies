const Sequelize = require("sequelize");

const ActorMovie = (sequelize, dataTypes) => {
  const cols = {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    actor_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    movie_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
    },
    updated_at: {
      type: Sequelize.DATE,
    },
  };
  const config = {
    tableName: "actor_movie",
    timestamps: false,
  };

  return sequelize.define("ActorMovie", cols, config);
};

module.exports = ActorMovie;
