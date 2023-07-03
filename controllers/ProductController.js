//OK/ Endpoint para crear un producto
//OK/ Endpoint para actualizar un producto

//IMPORT
const { Product } = require("../models/index.js");

console.log(Product);
//CONTROLADORES
const ProductController = {
  async post(req, res) {
    try {
      const product = await Product.create(req.body);
      res
        .status(201)
        .send({ message: "Product created successfully", product });
    } catch (error) {
      console.error(error);
      res.status(500).send("Error creating product");
    }
  },
  async put(req, res) {
    try {
      await Product.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      res.status(200).send({ message: "Product updated successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).send("Error updating product");
    }
  },
};



module.exports = ProductController;
