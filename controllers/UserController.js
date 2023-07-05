//IMPORT
const { User }  = require('../models/index.js');
const bcrypt = require ('bcryptjs');

//CONTROLADORES
const UserController = {
  async create(req, res) {
    try {
      req.body.role = "user" //añade predefinido a role el atributo de user sin ponerlo en Postman
      const password = bcrypt.hashSync(req.body.password,10)
      const user =  User.create({...req.body, password});
      res.status(201).send({ message: 'User created successfully', user })
    } catch (error) {
      console.error(error);
      res.status(500).send("Error creating user");
    }
  }, 

  login(req,res){
    User.findOne({
        where:{
            email:req.body.email
        }
    }).then(user=>{
        if(!user){
            return res.status(400).send({message:"Usuario o contraseña incorrectos"})
        }
        const isMatch = bcrypt.compareSync(req.body.password, user.password);
        if(!isMatch){
            return res.status(400).send({message:"Usuario o contraseña incorrectos"})
        }
        res.send(user)
    })
},



}

//EXPORTS
module.exports = UserController