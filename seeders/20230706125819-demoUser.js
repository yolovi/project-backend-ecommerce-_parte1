"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        name_user: "John",
        last_name: "Doe",
        email: "example@example.com",
        password: "123456",
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name_user: "Alice",
        last_name: "Smith",
        email: "alice@example.com",
        password: "qwerty",
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name_user: "Bob",
        last_name: "Johnson",
        email: "bob@example.com",
        password: "abc123",
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name_user: "Emma",
        last_name: "Wilson",
        email: "emma@example.com",
        password: "password123",
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name_user: "David",
        last_name: "Brown",
        email: "david@example.com",
        password: "securepassword",
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name_user: "Sophia",
        last_name: "Lee",
        email: "sophia@example.com",
        password: "letmein",
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name_user: "Oliver",
        last_name: "Clark",
        email: "oliver@example.com",
        password: "p@ssw0rd",
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name_user: "Mia",
        last_name: "Taylor",
        email: "mia@example.com",
        password: "mysecret",
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      
      
    ]);
  },

  async down(queryInterface, Sequelize) {},
};
