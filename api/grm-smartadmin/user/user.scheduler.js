
function testeAgenda() {
    console.log(new Date());
}


let schedule = {
    schedule: 's 1 h D M DS', 
    taskFunction: testeAgenda
}


module.exports = { schedule }