const mongoose = require('mongoose')
//Promise do mongoose esta deprecate com a linha abaixo estamos forçando o mongoose usar a Promise do node
mongoose.Promise = global.Promise
//Foi utilizado o parametro useMongoClient para não gerar warning 
module.exports = mongoose.connect('mongodb://localhost/mymoney', {
    useNewUrlParser: true
});

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'"
mongoose.Error.messages.String.enum = "'{VALUE}' não é válido para o atributo '{PATH}'."