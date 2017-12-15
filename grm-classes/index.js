require('console-warn');
require('console-info');

const grmApiService = require('../api/grm.api-scheduler')
const Schedule = require('./grm.scheduler')

// Agendador de Tarefas
grmApiService.forEach( (item) => {
    Schedule.addTask(item.schedule)
    Schedule.playTask(item.schedule.taskFunction.name)
})

