const Sequelize = require("sequelize");

const PasswordReset = (sequelize, dataTypes) => {
  const cols = {
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    token: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
    },
  };
  const config = {
    tableName: "password_resets",
    timestamps: false,
  };

  return sequelize.define("PasswordReset", cols, config);
};

module.exports = PasswordReset;
