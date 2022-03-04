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
  episodeId: {
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
  tableName: "actor_episode",
};

const ActorEpisode = sequelize.define("ActorSequelize", cols, config);

module.exports = ActorEpisode;
