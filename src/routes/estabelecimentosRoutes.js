const controller = require("../controllers/estabelecimentosController");
const express = require("express");
const router = express.Router();


router.get("/todos", controller.getAll);
router.get("/bairro", controller.findEstabelecimentoByBairro);
router.get("/", controller.findEstabelecimentoByNome);
router.get("/filtro", controller.findEstabelecimentoByAcessivel);
router.get("/kids", controller.findEstabelecimentoByKidsFriendly);
router.post("/", controller.postEstabelecimento);
router.post("/login", controller.login);
router.delete("/:id", controller.deleteEstabalecimento);
router.patch("/:id", controller.updateEstabalecimento )

module.exports = router;