const Sequelize = require("sequelize");

const User = (sequelize, dataTypes) => {
  const cols = {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    remember_token: {
      type: Sequelize.STRING,
    },
    created_at: {
      type: Sequelize.DATE,
    },
    updated_at: {
      type: Sequelize.DATE,
    },
  };
  const config = {
    tableName: "users",
    timestamps: false,
  };

  return sequelize.define("User", cols, config);
};

module.exports = User;
