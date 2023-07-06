//IMPORT
const { Order } = require("../models/index.js");

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
}

//EXPORT
module.exports = OrderController;