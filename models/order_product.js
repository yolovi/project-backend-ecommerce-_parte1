'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order_Product extends Model {
    static associate(models) {
    }
  }

  Order_Product.init(
    {
      ProductId: DataTypes.INTEGER,
      OrderId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Order_Product',
    }
  );

  return Order_Product;
};