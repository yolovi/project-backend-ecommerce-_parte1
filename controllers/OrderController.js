//IMPORT
const { Order, Product, User } = require("../models/index.js");


const OrderController = {
    async insert(req, res) {
      try {
        req.body.UserId  = req.user.id //a;adimos predefinido el UserId para que lo recoja del req.user que habiamos creado en authentication
        const order = await Order.create(req.body);
        // order.addUser(req.body.UserId)
        order.addProduct(req.body.ProductId) // para meter el ProductId en la tabla de order y autom pondra las FK en orderProduct (es importante para relacionar el producto en la tabla intermedia)
        res.status(201).send({
          message: `Order created successfully`,
          order_created: order, 
          products_added: req.body.ProductId
        });
      } catch (error) {
        console.error(error);
        res.status(500).send("Error creating order");  
      }
    },
  //FIXME: ver video manyToMany Genre Book para acotar los includes
  async getAll(req, res) {
    try {
      const orders = await Order.findAll({
      //el include equivale al inner join pero no se puede hacer hasta tener las relaciones y FK
        include: { model: Product, attributes: ["id", "name_product", "price"] },
      });
  
      res.status(200).send(orders);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Failed to retrieve orders" });
    }
  },
  
}

//EXPORT
module.exports = OrderController;