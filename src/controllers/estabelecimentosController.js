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

const findEstabelecimentoByBairro = (req, res) => {
  const filtroBairro = req.query.bairro
  const estabelecimentoEscolhido = estabelecimento.filter((estabelecimento, index) => {
      if(filtroBairro) {
          return estabelecimento.bairro.toLowerCase() === filtroBairro.toLowerCase()
      }
      return item
  })
  res.json(estabelecimentoEscolhido)
}


  const postEstabelecimento = (req, res) => {
    const novoEstabalecimento = new estabelecimento(req.body);
    novoEstabalecimento.save(function (err) {
      if (err) res.status(500).send({mensage: err.message})
      
      res.status(201).send(novoEstabalecimento.toJSON());
    });
  };




  
  
  module.exports = {
      getAll,
      findEstabelecimentoByBairro,
      postEstabelecimento,
      
  }
  