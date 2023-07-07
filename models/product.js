"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsTo(models.Category, { foreignKey: "CategoryId" });
      Product.belongsToMany(models.Order, { through: models.Order_Product });
    }
  }
  Product.init(
    {
      name_product: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please, insert a name product",
          },
        },
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please, insert a price",
          },
        },
      },
      CategoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please, insert a category",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
