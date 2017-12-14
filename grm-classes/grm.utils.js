/**
 * Concatena o caminho para o arquivo de schema com base
 * no nome do arquivo recebido
 */
function getPathFileShema(str) {
    let nameFile = str.split(".", 1)
    let concat = `../api/${nameFile}/${nameFile}.schema`
    return concat
}

module.exports = { getPathFileShema }