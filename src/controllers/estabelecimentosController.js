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
    const estabelecimento = new estabelecimento(req.body);
    estabelecimento.save(function (err) {
      if (err) res.status(500).send({mensage: err.message})
      
      res.status(201).send(estabelecimento.toJSON());
    });
  };

  
  
  module.exports = {
      getAll,
      postEstabelecimento,
      
  }
  