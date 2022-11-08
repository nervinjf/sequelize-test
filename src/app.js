const express = require("express");
const initModels = require("./models/initModels");
// importamos la instancia db de database.js
const db = require("./utils/database");

const userRoutes = require('./Routes/users.routes');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT;

db.authenticate() // devuelve una promesa
  .then(() => console.log("Autenticación exitosa"))
  .catch((error) => console.log(error));

db.sync({ force: false }) // devuelve una promesa
  .then(() => console.log("Base sincronizada"))
  .catch((error) => console.log(error));

initModels();

app.get("/", (req, res) => {
  res.status(200).json("Todo bien");
});

app.use("/api/v1", userRoutes);

app.use('/api/v1/users/:id', userRoutes);



app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
