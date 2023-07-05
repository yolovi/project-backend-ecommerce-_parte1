//IMPORT
const { User, Token }  = require('../models/index.js');
const bcrypt = require ('bcryptjs');
const jwt = require('jsonwebtoken');
const { jwt_secret } = require('../config/config.json')['development']


//CONTROLADORES
const UserController = {
  async create(req, res) {
    try {
      req.body.role = "user" //añade predefinido a role el atributo de user sin ponerlo en Postman
      const password = await bcrypt.hash(req.body.password,10) //encriptar password
      const user = await User.create({...req.body, password}); //desestructurar req.body del paso anterior para ponerle el password encriptado
      res.status(201).send({ message: 'User created successfully', user })
    } catch (error) {
      console.error(error);
      res.status(500).send("Error creating user");
    }
  }, 

     async login(req, res) {
      try {
        const user = await User.findOne({
          where: {
            email: req.body.email,
          },
        });
        if (!user) {
          return res
            .status(400)
            .send({ message: "Incorrect user or password" });
        }
        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) {
          return res
            .status(400)
            .send({ message: "Incorrect user or password" });
        }
        const token = jwt.sign({id: user.id}, jwt_secret);
        await Token.create({ token, UserId: user.id });
        res.send({message: "Welcome " + user.name, user, token}); //FIXME: no devuelve el nombre de usuario
      } catch (error) {
        console.error(error);
        res.status(500).send(error);
      }
    },


}



//EXPORTS
module.exports = UserController