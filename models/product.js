'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsTo(models.Category,{foreignKey:"CategoryId"});
      //FIXME: arreglar la relacion // Product.belongsTo(models.Order_Product,{foreignKey:("Order_Product_ProductId")})

    }
  }
  Product.init({
    name_product: DataTypes.STRING,
    price: DataTypes.FLOAT,
    CategoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};