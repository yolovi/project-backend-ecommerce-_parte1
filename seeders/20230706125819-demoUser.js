//IMPORT
const bcrypt = require ('bcryptjs');

"use strict";

// Para encriptar en los seedes tenéis que importados bcrypt en el archivo y donde ponéis la contraseña poned bcrypt.hash("contraseña123",10)

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [ //"Users" modelo importante el naming
      {
        name_user: "John",
        last_name: "Doe",
        email: "example@example.com",
        password: await bcrypt.hash("123456",10),
        role: "superadmin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name_user: "Alice",
        last_name: "Smith",
        email: "alice@example.com", 
        password: await bcrypt.hash("qwerty",10),
        role: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name_user: "Bob",
        last_name: "Johnson",
        email: "bob@example.com",
        password: await bcrypt.hash("abc123",10),
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name_user: "Emma",
        last_name: "Wilson",
        email: "emma@example.com",
        password: await bcrypt.hash("password123",10),
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name_user: "David",
        last_name: "Brown",
        email: "david@example.com",
        password: await bcrypt.hash("securepassword",10),
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name_user: "Sophia",
        last_name: "Lee",
        email: "sophia@example.com",
        password: await bcrypt.hash("letmein",10),
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name_user: "Oliver",
        last_name: "Clark",
        email: "oliver@example.com",
        password: await bcrypt.hash("ssw0rd",10),
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name_user: "Mia",
        last_name: "Taylor",
        email: "mia@example.com",
        password: await bcrypt.hash("mysecret",10),
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      }    
      
    ]);
  },

  async down(queryInterface, Sequelize) {},
};
