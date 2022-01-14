"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      todo.belongsTo(models.category, {
        foreignKey: {
          name: "idCategory",
        },
      });
    }
  }
  todo.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      dueDate: DataTypes.DATE,
      isCompleted: DataTypes.STRING,
      idCategory: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "todo",
    }
  );
  return todo;
};
