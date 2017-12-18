const fs = require('fs');


module.exports = (names, frag) => {
    console.log('remoes')
    
    const files = ['service','scheduler','data']
    names.forEach(name => {


        if (frag.exist('--remove')) {
            files.forEach( file => {
                const pathFile = `./api/grm.api-${file}.js`;
                const nameCamelCase = name.concat(file.capitalize())
                var data = fs.readFileSync(pathFile, 'utf8')

                data = data.replace(
                    `// const ${nameCamelCase} = require('./${name}/${name}.${file}')`,
                    ''
                )

                data = data.replace(
                    `// ${nameCamelCase},`,
                    ''
                )

                
                data = data.replace(
                    `const ${nameCamelCase} = require('./${name}/${name}.${file}')`,
                    ''
                )

                data = data.replace(
                    `${nameCamelCase},`,
                    ''
                )

                try {
                    fs.writeFile(pathFile, data, function (err) {
                        if (err) throw err;
                        console.log(`A API "${name}" foi removida, por segurança, os arquivos deverão ser deletados manualmente.`);
                    })
                }
                catch (err) {
                    console.error("Ocorreu um erro ao remover o arquivo:", err);
                }
                console.log(`remove comentario`, data)
            })
            return
        }


    })
}