
// exporte neste arquivo as APIs que deseja rodar na aplicação.


const Exemplo  = require('./exemplo/exemplo.service')
const Usuario = require('./usuario/usuario.service')
const Estoque = require('./estoque/estoque.service')
const Funcionario = require('./funcionario/funcionario.service')


module.exports = [
    Exemplo,
    Usuario,
    Funcionario,
    Estoque
]
