const Sequelize = require("sequelize");

const ActorEpisode = (sequelize, dataTypes) => {
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
    episode_id: {
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
    tableName: "actor_episode",
    timestamps: false,
  };

  return sequelize.define("ActorSequelize", cols, config);
};

module.exports = ActorEpisode;
