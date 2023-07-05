//IMPORT
const { Category } = require("../models/index.js");

//CONTROLADORES
const CategoryController = {
  async insert(req, res) {
    try {
      const category = await Category.create(req.body);
      res
        .status(201)
        .send({
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
        .send({
          message: `Category updated successfully`,
          category_updated: categoryUpdated,
        });
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
};



//EXPORT
module.exports = CategoryController;
