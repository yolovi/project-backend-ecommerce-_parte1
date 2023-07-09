//IMPORT
const { Product, Category, Sequelize } = require("../models/index.js");
const { Op } = Sequelize;

//CONTROLADORES
const ProductController = {
  async insert(req, res, next) {
    try {
      console.log(req.user.id);
      const product = await Product.create({
        ...req.body, //desestructuramos req.body
        UserId: req.user.id, // le ponemos una nueva propiedad (el user id logeado)
      }); //desestructuramos para incluir el user.id (para que autom coja el user logeado)
      res //FIXME: req.userId. despues de hacer las relaciones comprobar si sale el userId automat. al crear el producto en postman
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
      console.error(error);
      res.status(500).send("Error updating product");
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
      console.error(error);
      res.status(500).send("Error deleting product");
    }
  },
  //Filtro para buscar producto por nombre y categorias.
  async getAll(req, res) {
    try {
      const products = await Product.findAll({
       //el include equivale al inner join pero no se puede hacer hasta tener las relaciones y FK
        include: [
          { model: Category, 
            attributes: ["name_category"] }
        ],
      });
      res.status(200).send(products);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Error loading products" });
    }
  },

  //FIXME:Endpoint que traiga un producto por su id. Si pongo un id de producto que no existe sale un numero y no el error
  //NOTA: cuando sale este error "sqlMessage": "Unknown column 'Order_Product_ProductId' in 'field list'" es porque se ha puesto las relaciones de muchos a muchos sin conectar la FK. o en la tabla intermedia. 

  async getById(req, res) {
    try {
      const product = await Product.findByPk(req.params.id);
      res.send(product);
    } catch (err) {
      console.error(err);
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
      console.error(err);
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
      console.error(err);
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
      console.error(err);
      res.status(500).send(err);
    }
  },
  //precios de mayor a menor
  async orderDescByPrice(req, res) {
    // no hay que utilizar el req si no se le pide poner info pero se tiene que poner igualmente porque sino el res ocuparia el lugar de req
    try {
      const filteredProducts = await Product.findAll({
        order: [["price", "DESC"]],
      });
      res.status(200).send(filteredProducts);
    } catch (err) {
      console.error(err);
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
      console.error(err);
      res.status(500).send(err);
    }
  },
};

module.exports = ProductController;
