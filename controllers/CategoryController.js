//IMPORT
const { Category, Sequelize, Product } = require("../models/index.js");
const { Op } = Sequelize;

//CONTROLADORES
const CategoryController = {
  async insert(req, res) {
    try {
      const category = await Category.create(req.body);
      res.status(201).send({
        message: `Category created successfully`,
        category_created: category,
      });
    } catch (error) {
      res.status(500).send("Error creating category");
    }
  },
  async update(req, res) {
    try {
      const rowUpdated = await Category.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      if (rowUpdated === 0) {
        return res.status(404).send({ error: "Category not found." });
      }
      const categoryUpdated = await Category.findByPk(req.params.id);
      if (!categoryUpdated) {
        return res.status(404).send({ error: "Category not found." });
      }
      res
        .status(201)
        .send({ msg: "Category updated successfully", categoryUpdated });
    } catch (error) {
      res.status(500).send({ message: "Error updating category", error });
    }
  },
  async delete(req, res) {
    try {
      await Category.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).send("Category deleted successfully");
    } catch (error) {
      res.status(500).send({ message: "Error deleting category", error });
    }
  },
  async getByID(req, res) {
    try {
      const category = await Category.findByPk(req.params.id);
      res.status(200).send(category);
    } catch (error) {
      res.status(500).send({ message: "Error finding category", error });
    }
  },
  async getOneByName(req, res) {
    try {
      const category = await Category.findOne({
        where: {
          name_category: {
            [Op.like]: `%${req.params.name}%`,
          },
        },
      });
      res.status(200).send(category);
    } catch (error) {
      res.status(500).send({ message: "Error finding category", error });
    }
  },
  async getAll(req, res) {
    try {
      const categories = await Category.findAll({
        include: [
          {
            model: Product,
            attributes: ["id", "name_product"],
            foreignKey: "CategoryId",
          },
        ],
      });
      res.status(200).send(categories);
    } catch (error) {
      res.status(500).send({ message: "Error loading categories" });
    }
  },
};

//EXPORT
module.exports = CategoryController;
