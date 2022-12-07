const controller = require("../controllers/estabelecimentosController");
const express = require("express");
const router = express.Router();


router.get("/", controller.getAll);
router.post("/", controller.postEstabelecimento);


module.exports = router;