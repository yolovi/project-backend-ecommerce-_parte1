//IMPORT
const { Category, Sequelize } = require("../models/index.js");
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
      console.error(error);
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
      console.error(error);
      res.status(500).send("Error updating category");
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
      console.error(error);
      res.status(500).send("Error deleting category");
    }
  },
  async getByID(req, res) {
    try {
      const category = await Category.findByPk(req.params.id);
      res.status(200).send(category);
    } catch (error) {
      console.error(error);
      res.status(500).send("Error finding category");
    }
  },
  async getOneByName(req, res) {
    try {
      const category = await Category.findOne({
        where:{
          name_category: { //name_category es del modelo
            [Op.like]: `%${req.params.name}%` //name tiene que coincidir con el de la ruta
          }
        }
      });
      res.status(200).send(category)
    } catch (error) {
      console.error(error);
      res.status(500).send("Error finding category");
    }
  },
  async getAll(req, res) {
    try {
      const category = await Category.findAll();
      res.status(200).send(category);
    } catch (error) {
      console.error(error);
      res.status(500).send("Error finding category");
    }
  },

};

//EXPORT
module.exports = CategoryController;
