const express = require("express");
const app = express();
const PORT = 3000;

//MIDDLEWARE
app.use(express.json());

//ROUTES /prefix
app.use("/users", require("./routes/users"));
app.use("/products", require("./routes/products"));

//LISTEN 
app.listen(PORT,() => {
    console.log("Server is up and running on port " + PORT)
})
