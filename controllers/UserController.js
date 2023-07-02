//IMPORT
const { User }  = require('../models/index.js');


console.log(User)
//CONTROLADORES
const UserController = {
    create(req, res) {
      req.body.role = "user" //añade predefinido a role el atributo de user sin ponerlo en Postman
        User.create(req.body)
            .then(user => res.status(201).send({ message: 'Usuario creado con éxito', user }))
            .catch(console.error)
    },

}

//EXPORTS
module.exports = UserController