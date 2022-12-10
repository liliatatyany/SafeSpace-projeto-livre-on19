const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger/swagger_output.json');
require("dotenv").config();
const express = require('express');
const cors = require("cors");
const index = require("./routes/index");
const estabelecimento = require("./routes/estabelecimentosRoutes");
const db = require ("./database/dbconnect");
const app = express();

app.use(express.json());
app.use(cors());
db.connect()

console.clear()

app.use("/", index);
app.use("/estabelecimento", estabelecimento)
app.use('/rota-de-documentacao/safespace', swaggerUi.serve, swaggerUi.setup(swaggerFile));
module.exports = app;