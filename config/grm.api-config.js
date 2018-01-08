
module.exports = {

    project: 'grm-express',
    database: 'grm',
    port: 3000,
    originAccess: '*',
    dominioRoot: '',
    admin: {
        user: 'master',
        pass: 1
    },
    backup: {
        local: 'c:/backup',
        schedule: 's m h D M DS', 
    },
    developer: {
        name: 'Geilson Ribeiro',
        url: 'grmsystem.com',
        email: 'geilsonrm@hotmail.com'
    }

}