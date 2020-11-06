const readline = require ('readline')
const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

/* terminal.question('Qual seu nome?\n', nome =>{
    terminal.question('Qual seu telefone?\n', telefone => {
        console.log(
            `
            Nome: ${nome},
            Telefone: ${telefone}
            `
        )
        terminal.close()
    } )
}) */ 


function questionAsync(texto) {
    return new Promise((resolve, reject) => {
        terminal.question(`${texto}\n`, resolve)
    })
}

let nome = ""
let telefone = ""

Promise.resolve()
    .then(() => questionAsync('Qual é o seu nome?'))
    .then(resposta => {
        if (!resposta) {
            throw new Error('Nome vazio!')
        }
        nome = resposta
    })
    .then(() => questionAsync('Qual é o seu telefone?'))
    .then((resposta) => {
        if (!resposta) {
            throw new Error('Telefone vazio!')
        }
        telefone = resposta
    })
    .then(() => {
        console.log(`Nome: ${nome}, Telefone: ${telefone}`)
    })
    .catch(error => {
        console.log('Deu ruim****', error.stack)
    })
    .finally(() => terminal.close())
