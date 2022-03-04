const Sequelize = require("sequelize");
const sequelize = require("../../database");

const cols = {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  actorId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  movieId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
  },
  updatedAt: {
    type: DataTypes.DATE,
  },
};
const config = {
  tableName: "actor_movie",
};

const ActorMovie = sequelize.define("ActorMovie", cols, config);

module.exports = ActorMovie;
