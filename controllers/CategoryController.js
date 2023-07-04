//IMPORT
const {Category} = require("../models/index.js")

//CONTROLADORES
const CategoryController = {
    async post(req, res) {
      try {
        const product = await Category.create(req.body);
        res
          .status(201)
          .send({ message: "Category created successfully", Category });
      } catch (error) {
        console.error(error);
        res.status(500).send("Error creating category");
      }
    },

}

//EXPORT
module.exports = CategoryController;