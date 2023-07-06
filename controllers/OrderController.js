//IMPORT
const { Order, Product } = require("../models/index.js");

const OrderController = {
    async insert(req, res) {
      try {
        const order = await Order.create(req.body);
        res.status(201).send({
          message: `Order created successfully`,
          order_created: order,
        });
      } catch (error) {
        console.error(error);
        res.status(500).send("Error creating order");
      }
    },

     //FIXME: no salen los producto //Filtro para buscar pedido que muestre sus productos y num pedido (id order).
  async getAll(req, res) {
    try {
      const orders = await Order.findAll({
       //el include equivale al inner join pero no se puede hacer hasta tener las relaciones y FK
        include: [{ model: Product, attributes: ["id", "name_product", "price"] }],
      });
      res.status(200).send(orders);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Error loading orders" });
    }
  },
}

//EXPORT
module.exports = OrderController;