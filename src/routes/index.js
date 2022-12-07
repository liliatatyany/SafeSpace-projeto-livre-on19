const express = require("express")
const router = express.Router()

router.get("/", function (req, res) {
    res.status(200).send({
        title: "Reprograma On19 - Semana 18 - Projeto Final da Lília",
        version: "1.0.0"
    })
})

module.exports = router