
module.exports = {

    project: 'grm-express',
    database: 'grm',
    port: 3000,
    requireAuth: false,
    showPageRoot: true,
    sessionSecret: 'minhaPalavraSecresta',
    originAccess: '*',
    developer: {
        name: 'Geilson Ribeiro',
        url: 'grmsystem.com',
        email: 'geilsonrm@hotmail.com'
    },
    admin: {
        user: 'master',
        pass: 2
    },
    backup: {
        local: 'c:/backup',
        schedule: 's m h D M DS', 
    }

}