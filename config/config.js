
module.exports = {

    project: 'grm-express',
    database: 'grm',
    port: 3000,
    pageRoot: true,
    sessionSecret: 'minhaPalavraSecresta',
    originAccess: '*',
    developer: {
        name: 'Geilson Ribeiro',
        url: 'grmsystem.com',
        email: 'geilsonrm@hotmail.com'
    },
    backup: {
        local: 'c:/backup',
        schedule: 's m h D M DS', 
    }

}