const { query } = require("express");
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

const findEstabelecimentoByBairro = async (req, res) => {
    try {
      const requestBairro = req.query.bairro
      
      const filterByBairro  = await estabelecimento.find({bairro:requestBairro})
      res.status(200).json(filterByBairro);  
    } catch (error) {
      res.status(500).json({ message: error.message }); 
    }
};

const findEstabelecimentoByNome = async (req, res) => {
    try {
      const findEstabelecimentoByNome = await estabelecimento.findOne({nome:req.query.nome})
      if (!findEstabelecimentoByNome) {
        res.status(404).json({ message: "Estabelecimento não localizado" });
      }
      res.status(200).json(findEstabelecimentoByNome);
    } catch (error) {
      res.status(500).json({ message: error.message });
    };
};

  const findEstabelecimentoByAcessivel = async (req, res) => {
    try {
      const requestAcessivel = req.query.acessivel
      
      const filterByAcessivel  = await estabelecimento.find({acessivel:requestAcessivel})
      res.status(200).json(filterByAcessivel);  
    } catch (error) {
      res.status(500).json({ message: error.message }); 
    }
};

const postEstabelecimento = (req, res) => {
    const novoEstabalecimento = new estabelecimento(req.body);
    novoEstabalecimento.save(function (err) {
      if (err) res.status(500).send({mensage: err.message})
      
      res.status(201).send(novoEstabalecimento.toJSON());
    });
};

const deleteEstabalecimento = async (req, res) => {
  try {
    const acharEstabelecimento = await estabelecimento.findById(req.params.id);
    await acharEstabelecimento.delete();
    return res.status(200).send({
      mensagem: `O estabelecimento foi deletado com sucesso!`,
      acharEstabelecimento,
    });
  } catch (err) {
    return res.status(400).send({
      mensagem: err.message,
    });
  }
};

const updateEstabalecimento = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      nome,
      endereço,
      bairro,
      kidsFriendly,
      acessivel,
      lgbtqiapn,
      seguro,
      avaliacao,
    } = req.body;
    const acharEstabelecimento = await estabelecimento.findById(id);
    if (acharEstabelecimento == null) {
      res.status(404).json({ message: "Estabelecimento não encontrado" });
    };

    acharEstabelecimento.nome = nome || acharEstabelecimento.nome;
    acharEstabelecimento.endereço = endereço || acharEstabelecimento.endereço;
    acharEstabelecimento.bairro = bairro || acharEstabelecimento.bairro;
    acharEstabelecimento.kidsFriendly = kidsFriendly || acharEstabelecimento.kidsFriendly;
    acharEstabelecimento.acessivel = acessivel || acharEstabelecimento.acessivel;
    acharEstabelecimento.lgbtqiapn = lgbtqiapn || acharEstabelecimento.lgbtqiapn;
    acharEstabelecimento.seguro = seguro || acharEstabelecimento.seguro;
    acharEstabelecimento.avaliacao = avaliacao || acharEstabelecimento.avaliacao;

    const salvarEstabelecimento = await acharEstabelecimento.save();
    res.status(200).json({ message: "Estabelecimento atualizado com sucesso", salvarEstabelecimento });
  } catch (error) {
    res.status(500).json({ message: error.message });
  };
}; 


  
  module.exports = {
      getAll,
      findEstabelecimentoByBairro,
      findEstabelecimentoByNome,
      findEstabelecimentoByAcessivel,
      postEstabelecimento,
      deleteEstabalecimento,
      updateEstabalecimento
  }