const fs = require('fs');


module.exports = (names, frag) => {
    const files = ['service','scheduler','data']
    names.forEach(name => {


        if (frag.exist('--comment')) {
            files.forEach( file => {
                const pathFile = `./api/grm.api-${file}.js`;
                const nameCamelCase = name.concat(file.capitalize())
                var data = fs.readFileSync(pathFile, 'utf8')

                data = data.replace(
                       `const ${nameCamelCase} = require('./${name}/${name}.${file}')`,
                    `// const ${nameCamelCase} = require('./${name}/${name}.${file}')`
                )

                data = data.replace(
                       `${nameCamelCase},`,
                    `// ${nameCamelCase},`
                )

                try {
                    fs.writeFile(pathFile, data, function (err) {
                        if (err) throw err;
                        console.log(`A API "${name}" foi comentada.`);
                    })
                }
                catch (err) {
                    console.error("Ocorreu um erro ao alterar o arquivo:", err);
                }
                console.log(`insere comentario`, data)
            })
            return
        }


        if (frag.exist('--uncomment')) {
            files.forEach( file => {
                const pathFile = `./api/grm.api-${file}.js`;
                const nameCamelCase = name.concat(file.capitalize())
                var data = fs.readFileSync(pathFile, 'utf8')

                data = data.replace(
                    `// const ${nameCamelCase} = require('./${name}/${name}.${file}')`,
                    `const ${nameCamelCase} = require('./${name}/${name}.${file}')`
                )

                data = data.replace(
                    `// ${nameCamelCase},`,
                    `${nameCamelCase},`
                )

                try {
                    fs.writeFile(pathFile, data, function (err) {
                        if (err) throw err;
                        console.log(`A API "${name}" foi descomentada.`);
                    })
                }
                catch (err) {
                    console.error("Ocorreu um erro ao alterar o arquivo:", err);
                }
                console.log(`remove comentario`, data)
            })
            return
        }

    })
}