"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Products", [
      {
        name_product: "Art Deco Gatsby Lamp Brace",
        price: 50,
        CategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name_product: "Industrial Wall Lamp",
        price: 34.95,
        CategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name_product: "Art Deco Gatsby Lamp",
        price: 64.95,
        CategoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name_product: "Industrial Lamp",
        price: 44,
        CategoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name_product: "Modern Rail Black",
        price: 120,
        CategoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name_product: "Art Deco Ceiling Lamp",
        price: 420,
        CategoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name_product: "Modern Floor Lamp",
        price: 100,
        CategoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name_product: "Nordic Floor Lamp",
        price: 30,
        CategoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
          
    ]);
  },

  async down(queryInterface, Sequelize) {},
};
