const Sequelize = require("sequelize");

const Genre = (sequelize, dataTypes) => {
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
    ranking: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    active: {
      type: Sequelize.BOOLEAN,
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
    tableName: "genres",
    timestamps: false,
  };

  return sequelize.define("Genre", cols, config);
};

Genre.associate = (models) => {
  Genre.hasMany(models.Movie, {
    as: "Movie",
    foreignKey: "genre_id",
  });
};

module.exports = Genre;
