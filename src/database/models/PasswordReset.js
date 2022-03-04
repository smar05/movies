const Sequelize = require("sequelize");
const sequelize = require("../../database");

const cols = {
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  token: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
  },
};
const config = {
  tableName: "password_resets",
};

const PasswordReset = sequelize.define("PasswordReset", cols, config);

module.exports = PasswordReset;
