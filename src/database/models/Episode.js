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
  },
  number: {
    type: Sequelize.INTEGER,
  },
  releaseDate: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  rating: {
    type: Sequelize.DECIMAL,
    allowNull: false,
  },
  seasonId: {
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
  tableName: "episodes",
};

const Episode = sequelize.define("Episode", cols, config);

module.exports = Episode;
