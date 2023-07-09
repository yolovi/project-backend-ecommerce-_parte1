//IMPORT
const { Product, Category, Sequelize } = require("../models/index.js");
const { Op } = Sequelize;

//CONTROLADORES
const ProductController = {
  async insert(req, res, next) {
    try {
      const product = await Product.create({
        ...req.body, 
        UserId: req.user.id, 
      }); 
      res 
        .status(201)
        .send({ message: "Product created successfully", product });
    } catch (error) {
      console.error(error);
      next(error)
    }
  },
  async update(req, res) {
    try {
      const rowUpdated = await Product.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      if (rowUpdated === 0) {
        return res.status(404).send({ error: "Product not found." });
      }
      const productUpdated = await Product.findByPk(req.params.id);
      if (!productUpdated) {
        return res.status(404).send({ error: "Product not found." });
      }
      res
        .status(201)
        .send({ msg: "Product updated successfully", productUpdated });
    } catch (error) {
      res.status(500).send({message: "Error updating product", error});
    }
  },
  async delete(req, res) {
    try {
      await Product.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).send("Product deleted successfully");
    } catch (error) {
      res.status(500).send({ message: "Error deleting product", error});
    }
  },
  async getAll(req, res) {
    try {
      const products = await Product.findAll({
        include: [
          { model: Category, 
            attributes: ["name_category"] }
        ],
      });
      res.status(200).send(products);
    } catch (error) {
      res.status(500).send({ message: "Error loading products", error });
    }
  },
  async getById(req, res) {
    try {
      const product = await Product.findByPk(req.params.id);
      res.send(product);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  async getOneByName(req, res) {
    try {
      const product = await Product.findOne({
        where: {
          name_product: {
            [Op.like]: `%${req.params.name_product}%`,
          },
        },
      });
      res.status(200).send(product);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  async getByPrice(req, res) {
    try {
      const filteredProducts = await Product.findAll({
        where: {
          price: req.params.price,
        },
      });
      if (filteredProducts.length === 0) {
        return res.status(404).send({ error: "No products found." });
      }
      res.status(200).send(filteredProducts);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  async getByPriceRange(req, res) {
    try {
      const minPrice = req.query.min || 0;
      const maxPrice = req.query.max || Infinity;
      const filteredProducts = await Product.findAll({
        where: {
          price: {
            [Op.and]: [{ [Op.gte]: minPrice }, { [Op.lte]: maxPrice }],
          },
        },
      });
      res.status(200).send(filteredProducts);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  async orderDescByPrice(req, res) {
    try {
      const filteredProducts = await Product.findAll({
        order: [["price", "DESC"]],
      });
      res.status(200).send(filteredProducts);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  async orderAscByPrice(req, res) {
    try {
      const filteredProducts = await Product.findAll({
        order: [["price", "ASC"]],
      });
      res.status(200).send(filteredProducts);
    } catch (err) {
      res.status(500).send(err);
    }
  },
};

module.exports = ProductController;
