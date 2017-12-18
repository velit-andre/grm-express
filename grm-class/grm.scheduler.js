
const cron = require('node-cron')

class Scheduler {

    constructor() {
        this.tasks = []

    }

    fixValueToSchedule(str) {
        return str.replace('s', '*')
                  .replace('m', '*')
                  .replace('h', '*')
                  .replace('D', '*')
                  .replace('M', '*')
                  .replace('DS', '*')
    }

    isValid(agenda) {
        return cron.validate(agenda)
    }

    getStatus(nameTask) {
        return this.tasks[nameTask].status
    }


    addTask(p) {
        let agenda = this.fixValueToSchedule(p.schedule)
        let valid = this.isValid(agenda)
        if(valid) {
            let task = cron.schedule(agenda, function(){
                p.taskFunction()
            }, false);
            this.tasks[p.taskFunction.name] = task
            this.tasks[p.taskFunction.name].status = 'added'        
        }
        this.infoTask(p)
    }


    infoTask(p) {
        let agenda = this.fixValueToSchedule(p.schedule)        
        let valid = this.isValid(agenda)
        let tarefa = `\n   |- Tarefa: ${p.taskFunction.name}()`
        let schedule = `\n   |- Agenda: '${p.schedule}'\n`
        if(valid) {
            console.log(`Tarefa Agendada`.concat(tarefa).concat(schedule))            
        } else {
            console.warn(`Tarefa com erro no agendamento`.concat(tarefa).concat(schedule))            
        }
    }


    playTask(nameTask) {
        this.tasks[nameTask].start()
        this.tasks[nameTask].status = 'play'
        console.warn(`A tarefa "${nameTask}()" foi inicializada!`)            
        
    }


    pauseTask(nameTask) {
        this.tasks[nameTask].stop()
        this.tasks[nameTask].status = 'pause'        
        console.warn(`A tarefa "${nameTask}()" foi pausada!`)            
        
    }


    destroyTask(nameTask) {
        this.tasks[nameTask].destroy()
        this.tasks[nameTask].status = 'destroed'        
        console.warn(`A tarefa "${nameTask}()" foi destroida!`)                    
    }


}

module.exports = new Scheduler()