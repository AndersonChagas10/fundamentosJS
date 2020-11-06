//mese começa com zero
const dataAniversario = new Date(2020, 0, 20)


//console.log(dataAniversario)

const primeiraDataJS = new Date(0)
//console.log(primeiraDataJS.getTime())


const hoje = new Date()
//console.log(hoje.toLocaleDateString)

//Formato global recomendado
//console.log(hoje.toISOString()) 

const dia = hoje.getDate()
hoje.setDate(dia - 5 )// -5 dias depois de hoje
hoje.setHours(10, 30, 0)
//console.log(hoje)
