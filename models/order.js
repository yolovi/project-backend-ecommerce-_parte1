'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsTo(models.User,{foreignKey:"UserId"})
      //FIXME: arreglar la relacion // Order.belongsTo(models.Order_Product,{foreignKey:("Order_Product_OrderId")})
    }
  }
  Order.init({
    total_price: DataTypes.FLOAT,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};