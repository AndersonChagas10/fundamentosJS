const { Console } = require("console")

const textoPar ="par"
const textoImpar = "impar"

//for( let index = 0; index <= 10; index++){
 ///   const decisao = index % 2 === 0 ? textoPar : textoImpar
//    console.log(`O Número ${index} é ${decisao}`)
//}


const minhaListaDeTarefas = [
    {
        id: parseInt(Math.random() + 9),
        nome: 'João',
        superPoder: 'Jogador'


    },
    {
        id: Math.random(),
        nome: 'Vanessa',
        superPoder: 'Força retada'
    }

]

for(let index = 0; index < minhaListaDeTarefas.length; index++){
    const item = minhaListaDeTarefas[index]
    console.log(
        `
        id: ${item.id}
        nome:${item.nome   }
        `
    )
}

// não precisa do contador 

for(const item of minhaListaDeTarefas){
    //conts item = minhaListaDeTarefas[index]
    console.log('nome', item.nome)
}