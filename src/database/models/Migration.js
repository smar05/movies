const Sequelize = require("sequelize");
const sequelize = require("../../database");

const cols = {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  migration: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  batch: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
};
const config = {
  tableName: "migrations",
  timestamps: false,
};

const Migration = sequelize.define("Migration", cols, config);

module.exports = Migration;
