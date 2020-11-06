const readLine = require('readline')
const terminal = readLine.createInterface({
    //definir o modo de entrada via terminal
    input: process.stdin,
    //todo o tesxto de saida sairá no teminal 
    output: process.stdout

}) 


// texto do menu
const textoMenu = `
Olá, seja bem vindo ao sistema de Anderson Chagas
Digite 1 para acessar o menu inicial
Digite 2 para acessar o menu de Herois
Digite 3 para acessar o menu de Guerreiras
Digite 0 para sair
`
//console.log('textoMenu', textoMenu)
//const opcao = 1
//switch(opcao){
//    case 1:
 //       console.log('pressinou 1')
//        break;
//    case 2:
//        console.log('pressionou 2')
//        break;
//    case 3:
 //       console.log('pressionou 3')
//        break;
//}

const questoes = {
    menuInicial:{
        texto: textoMenu,
        fn: menuInicial
    },
    opcao1: {
        texto: 'submeni! Pressione enter para selecionar mais opções... ',
        fn: opcao1
    }

}
function opcao1(msg){
    console.log('Não há mias opções!')
    terminal.close()
}

function menuInicial(msg){
    const opcao = Number(msg)
    if(isNaN(opcao)){
        throw new Error('Não é u numero valido!', msg)
    }
    switch(opcao){
        case 0:
                console.log('Saindo...')
                terminal.close()
                break;
        case 1:
                console.log('Menu inicial')
                terminal.question(
                    questoes.opcao1.texto,
                    questoes.opcao1.fn
                )
                terminal.close()
                break;
        default:
                console.log('Opção Invalida!')
                terminal.close()
                break;
    }


}

terminal.question(
   questoes.menuInicial.texto,
   questoes.menuInicial.fn

)