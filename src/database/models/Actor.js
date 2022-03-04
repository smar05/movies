const Sequelize = require("sequelize");
const sequelize = require("../../database");

const cols = {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  firsName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  rating: {
    type: Sequelize.DECIMAL,
  },
  favoriteMovieId: {
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
  tableName: "actors",
};

const Actor = sequelize.define("Actor", cols, config);

module.exports = Actor;
