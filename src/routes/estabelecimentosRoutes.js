const controller = require("../controllers/estabelecimentosController");
const express = require("express");
const router = express.Router();


router.get("/", controller.getAll);
router.get("/", controller.findEstabelecimentoByBairro)
router.post("/", controller.postEstabelecimento);
//router.delete("/", controller.deleteEstabalecimento)
//router.patch("/", controller.updateEstabalecimento )

module.exports = router;