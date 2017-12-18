
var fs = require('fs');

String.prototype.replaceAll = function (searchStr, replaceStr) {
    var str = this;
    searchStr = searchStr.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
    return str.replace(new RegExp(searchStr, 'gi'), replaceStr)
}


module.exports = function (frag, name) {
    const lib = `./grm/create-file-${frag}`;
    var file = require(lib)
    
    file.string = file.string.replaceAll('{NAME}', name)

    fs.writeFile(`${name}.${file.type}.js`, file.string, function (err) {
        if (err) throw err;
        console.log(`Create File "${name}.js"`);
    })

}
