const mongoose = require('mongoose');

const estabelecimentoSchema = new mongoose.Schema({
    
    email: { type: String },
    senha: { type: String },
    nome: { type: String },
    endereço: { type: String },
    bairro: { type: String },
    kidsFriendly: { type: Boolean },
    acessivel: { type: Boolean},
    lgbtqiapn: { type: Boolean},
    seguro: { type: Boolean},
    avaliacao: { type: String },
    
    
},{
    versionKey: false
})

const estabelecimento = mongoose.model('estabelecimento', estabelecimentoSchema);

module.exports = estabelecimento