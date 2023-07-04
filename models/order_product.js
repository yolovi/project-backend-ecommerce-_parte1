'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order_Product extends Model {
    static associate(models) {
      // Order_Product.hasMany(models.Order,{foreignKey:("Order_Product_OrderId")})
      // Order_Product.hasMany(models.Product,{foreignKey:("Order_Product_ProductId")})
    }
  }
  Order_Product.init({
    Order_Product_ProductId: DataTypes.INTEGER,
    Order_Product_OrderId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order_Product',
  });
  return Order_Product;
};