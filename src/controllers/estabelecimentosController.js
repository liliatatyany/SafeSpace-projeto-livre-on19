const estabelecimento = require("../models/estabelecimentosModel");


const getAll = (req, res) => {
  estabelecimento.find(function (err, estabelecimento) {
    if (err) {
      return res.status(500).send({
        message: err.message
      })
    }
    return res.status(200).json(estabelecimento)
  })
};
  
  const postEstabelecimento = (req, res) => {
    const novoEstabalecimento = new estabelecimento(req.body);
    novoEstabalecimento.save(function (err) {
      if (err) res.status(500).send({mensage: err.message})
      
      res.status(201).send(novoEstabalecimento.toJSON());
    });
  };

  
  
  module.exports = {
      getAll,
      postEstabelecimento,
      
  }
  