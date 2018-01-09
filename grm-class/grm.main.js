require('console-warn');
require('console-info');


const grmApiDefaultSchudeler = require('../api/grm-smartadmin/grm.api-scheduler')
const grmApiDefaultData = require('../api/grm-smartadmin/grm.api-data')

const grmApiSchudeler = require('../api/grm.api-scheduler')
const grmApiData = require('../api/grm.api-data')
const grmSchedule = require('./grm.scheduler')
const GrmCrud = require('./grm.crud')

const schudeler = grmApiSchudeler.concat(grmApiDefaultSchudeler)
const data = grmApiData.concat(grmApiDefaultData)

// Agendador de Tarefas
schudeler.forEach( (item) => {
    grmSchedule.addTask(item.schedule)
    grmSchedule.playTask(item.schedule.taskFunction.name)
})




// const Model = new GrmCrud('user')
// console.info(Model)


data.forEach( (arr) => {
    const nameCollection = arr.splice(0,1)
    const Model = new GrmCrud(nameCollection)
    arr.forEach( (item) => {
        Model.isEmptyThenCreate(item).catch((err)=> console.error)
    })
})

// module.exports = {}