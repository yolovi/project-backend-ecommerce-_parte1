//IMPORT
const { Order, Product, User } = require("../models/index.js");

const OrderController = {
  async insert(req, res) {
    try {
      req.body.UserId = req.user.id;
      const productIds = req.body.ProductId;
      const products = await Product.findAll({
        where: {
          id: productIds,
        },
      });
      if (products.length !== productIds.length) {
        const existingProductIds = products.map((product) => product.id);
        const missingProductIds = productIds.filter(
          (productId) => !existingProductIds.includes(productId)
        );
        return res.status(404).send({
          error: `Product(s) ${missingProductIds.join(", ")} not found.`,
        });
      }

      const order = await Order.create(req.body);
      await order.addProducts(products);

      res.status(201).send({
        message: "Order created successfully",
        order_created: order,
        products_added: productIds,
      });
    } catch (error) {
      res.status(500).send({ message: "Error creating order", error });
    }
  },

  async getAll(req, res) {
    try {
      const orders = await Order.findAll({
        include: [
          {
            model: Product,
            attributes: ["id", "name_product", "price"],
            through: { attributes: [] },
          },
        ],
      });
      res.status(200).send(orders);
    } catch (error) {
      res.status(500).send({ message: "Failed to retrieve orders", error });
    }
  },
};

//EXPORT
module.exports = OrderController;
