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
  endDate: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  serieId: {
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
  tableName: "seasons",
};

const Season = sequelize.define("Season", cols, config);

module.exports = Season;
