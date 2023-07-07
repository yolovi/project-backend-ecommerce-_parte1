'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order_Product extends Model {
    static associate(models) {
      // No se necesita una asociación directa en este modelo. Aqui no va la relacion de hasMany/belongsToMany
      //las relaciones van en los modelos (order y product)
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