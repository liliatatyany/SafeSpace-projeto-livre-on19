require("dotenv").config();
const express = require('express');
const cors = require("cors");
const index = require("./routes/index");
const estabelecimento = require("./routes/estabelecimentosRoutes");
const db = require ("./database/dbConnect");
const app = express();

app.use(express.json());
app.use(cors());
db.connect()
//console.clear()

app.use("/", index);
app.use("/estabelecimento", estabelecimento)

module.exports = app;