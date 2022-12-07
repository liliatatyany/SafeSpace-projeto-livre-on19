const mongoose = require('mongoose');

const estabelecimentosSchema = new mongoose.Schema({
    
    nome: { type: String },
    endereço: { type: String },
    bairro: { type: String },
    kidsFriendly: { type: Boolean },
    acessivel: { type: Boolean},
    lgntquapn: { type: Boolean},
    seguro: { type: Boolean},
    avaliacao: { type: String },
    
    
},{
    versionKey: false
})

const estabelecimento = mongoose.model('estabelecimento', estabelecimentosSchema);

module.exports = estabelecimento