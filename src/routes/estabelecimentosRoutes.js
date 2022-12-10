const controller = require("../controllers/estabelecimentosController");
const express = require("express");
const router = express.Router();


router.get("/todos", controller.getAll);
router.get("/", controller.findEstabelecimentoByBairro);
router.get("/", controller.findEstabelecimentoByNome);
router.get("/", controller.findEstabelecimentoByAcessivel);
router.post("/", controller.postEstabelecimento);
router.delete("/:id", controller.deleteEstabalecimento)
router.patch("/:id", controller.updateEstabalecimento )

module.exports = router;