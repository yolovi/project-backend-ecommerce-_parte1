const express = require("express");
const app = express();
const {typeError} = require('./middleware/errors');
const PORT = 3000;

//MIDDLEWARE (funcion que ejecutas antes de las rutas)
app.use(express.json());

//ROUTES /prefix
app.use("/users", require("./routes/users"));
app.use("/products", require("./routes/products"));
app.use("/categories", require("./routes/categories"));
app.use("/orders", require("./routes/orders"));

//MIDDLEWARE ERRORS
app.use(typeError)

//LISTEN 
app.listen(PORT,() => {
    console.log("Server is up and running on port " + PORT)
})
