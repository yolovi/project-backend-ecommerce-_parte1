//IMPORT
const { User, Token, Sequelize }  = require('../models/index.js');
const { Op } = Sequelize;
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
      res.status(500).send({message: "Error creating user", error});
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
        res.send({message: "Welcome " + user.name_user, user, token}); 
      } catch (error) {
        console.error(error);
        res.status(500).send(error);
      }
    },
    async getAll(req, res) {
      try {
        const users = await User.findAll();
        res.status(200).send(users);
      } catch (error) {
        console.error(error);
        res.status(500).send("Error finding category");
      }
    },
    async logout(req, res) {
      try {
          await Token.destroy({
              where: {
                  [Op.and]: [
                      { UserId: req.user.id },
                      { token: req.headers.authorization }
                  ]
              }
          });
          res.send({ message: 'You have been successfully logged out' })
      } catch (error) {
          console.log(error)
          res.status(500).send({ message: 'Error trying to being logged out' })
      }
  }

  
  };






//EXPORTS
module.exports = UserController