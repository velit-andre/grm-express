
const fs = require('fs');
const mkdirp = require('mkdirp');
const apiComment = require('./api-comment');
const apiRemove = require('./api-remove');
const incrementService = require('./api-increment-service');
require('./functions.js')()

var files = ['schema', 'service', 'data', 'functions', 'scheduler', 'extend']
// var files = ['schema']

module.exports = function (names, frag) {
    // adiciona ou remove comentários
    if(frag.exist('--comment') || frag.exist('--uncomment')) {
        apiComment(names, frag)
        return
    }

    // remove api
    if(frag.exist('--remove') ) {
        apiRemove(names, frag)
        return
    }

    // se for --basic remover ultimos arquivos do array
    files = frag.exist('--basic') ? files.splice(0, 2) : files;

    // percorre cada nome de arquivo a ser criado
    names.forEach(name => {
        // cria nova pasta
        var nameFolder = `./api/${name}`
        try {
            fs.mkdirSync(nameFolder)
        } catch (error) {
            if (error.code = 'EEXIST') {
                if(!frag.exist('--renew')) {
                    console.error(`ATENÇÃO! A API "${nameFolder}" já existe! Utilize "--renew" caso queira subscrever.`)
                    return
                }
            }
        }

        files.forEach(file => {
            // cria nonvo arquivo
            var nameFile = `${nameFolder}/${name}.${file}.js`
            try {
                // lê conteúdo do arquivo
                var data = fs.readFileSync(`./grm-lib/exemplo/exemplo.${file}.js`, 'utf8');
                // renomeia nome do arquivo no corpo
                data = data.replaceAll('exemplo', name)
                // cria arquivo
                fs.writeFile(nameFile, data, function (err) {
                    if (err) throw err;
                    console.log(`Create File "${nameFile}"`);
                    incrementService(file, name)
                })
            }
            catch (err) {
                console.error("Ocorreu um erro ao ler o arquivo:", err);
            }
        })
    })
    // console.log(`AVISO! Lembre-se de instaciar a API na raiz da pasta /API`)    
}


