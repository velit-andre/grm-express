
function testeAgenda() {
    console.log(new Date());
}


let schedule = {
    schedule: 's m h D M DS', 
    taskFunction: testeAgenda
}


module.exports = { schedule }