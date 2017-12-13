const mongoose = require('mongoose')
module.exports = mongoose.connect('mongodb://localhost/db_finance')

var db = mongoose.connection;  
db.on('error', function(err){  
    console.log('Erro de conexao.', err)
});
db.on('open', function () {  
  console.log('Conexão aberta.')
});
db.on('connected', function(err){  
    console.log('Conectado')
});
db.on('disconnected', function(err){  
    console.log('Desconectado')
});

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum = "'{VALUE}' não é válido para o atributo '{PATH}'."
