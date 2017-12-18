
function testeAgenda() {
    let data = new Date().toString()
    console.log(`${data.substring(4,24)} Agendamento de Tarefa "escola" está funcionando!`);
}


let schedule = {
    schedule: 's/10 m h D M DS', 
    taskFunction: testeAgenda
}


module.exports = { schedule }