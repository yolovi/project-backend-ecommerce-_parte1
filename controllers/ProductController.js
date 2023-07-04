//IMPORT
//const { Product, Sequelize } = require("../models/index.js");
const { Product, Category, Sequelize } = require("../models/index.js");
const { Op } = Sequelize;

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
      res.status(201).send("Product updated successfully");
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
  //TODO: Filtro para buscar producto por nombre y categorias.
  //TODo: pasar getAll a async await. Traerlo con sus cateogorias solo se puede cuando esten las rel y FK
  //   getAll(req, res) {
  //     Product.findAll({
  //             // include: [Category] //esto es el inner join pero no se puede hacer hasta tener las relaciones y FK
  //         })
  //         .then(products => res.send(products))
  //         .catch(err => {
  //             console.log(err)
  //             res.status(500).send({ message: 'Error loading products' })
  //         })
  // },
  //Endpoint que traiga un producto por su id
  //NOTA: cuando sale este error "sqlMessage": "Unknown column 'Order_Product_ProductId' in 'field list'" es porque se ha puesto las relaciones de muchos a muchos sin conectar la FK.

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
  // Filtrar los productos por precio (valores fijos)
  async getByPrice(req, res) {
    try {
      const filteredProducts = await Product.findAll({
        where: {
          price: req.params.price,
        },
      });
  
      if (filteredProducts.length === 0) {
        return res.status(404).send({ error: 'No products found.' });
      }
  
      res.status(200).send(filteredProducts);
    } catch (err) {
      console.error(err);
      res.status(500).send(err);
    }
  },
  // Ruta para obtener productos dentro de un rango de precios
  // async getByPriceRange(req, res) {
  //   try {
  //     const filteredProducts = await Product.findAll({
  //       whrere: {
  //         [Op.and]: {
  //           const minPrice : req.query.min || 0;
  //           const maxPrice : req.query.max || Infinity;
            
  //       }
  //     });

      
  //   } catch (error) {
      
  //   }
  // }

// app.get("/products/filter/price/all", (req, res) => {
//   const minPrice = req.query.min || 0;
//   const maxPrice = req.query.max || Infinity;
};



module.exports = ProductController;

//TODO: FIXME: mostrar el producto en el mensaje despues de estatus al actualizar un producto:

// async put(req, res) {
//     try {
//         await Product.update(req.body, {
//         where: {
//           id: req.params.id,
//         },
//       });
//       const product = await Product.findByPk(req.params.id)
//       res
//       .status(201)
//       .send({ message: "Product updated successfully", product });
//     } catch (error) {
//       console.error(error);
//       res.status(500).send("Error updating product");
//     }
//   },
