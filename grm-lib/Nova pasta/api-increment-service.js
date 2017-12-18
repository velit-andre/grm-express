const fs = require('fs');
const mkdirp = require('mkdirp');
require('./functions.js')

module.exports = (type, name) => {
    const nameCamelCase = name.concat(type.capitalize())
    const pathFile = `./api/grm.api-${type}.js`;

    if (['service', 'scheduler', 'data'].exist(type)) {
        var data = fs.readFileSync(pathFile, 'utf8')

        // garante que não faça exportação duplicada da api.
        if(data.exist(nameCamelCase)) return
        
        // add linha no início
        data = data.replace(
            '. ¹',
            `. ¹\nconst ${nameCamelCase} = require('./${name}/${name}.${type}')`
        )

        fs.writeFile(
            // caminho e nome do arquivo
            `./api/grm.api-${type}.js`,
            // dados a ser inserido
            data.replace('exports = [', `exports = [\n    ${nameCamelCase},`),
            // função de callback
            function (err) {
                if (err) throw err;
                console.log(`ATENÇÃO! Alteração realizada no arquivo "${pathFile}" para exportar "${nameCamelCase}"`)
            }
        )
    }
}