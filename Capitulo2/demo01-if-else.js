let frutasExistentesNoMercado = false
let temCPUSuficiente = true


//
// ober valores do terminal

const args = process.argv
const saldo =  args[args.length -1]
//console.log ('args', args)
//console.log('saldo', saldo)
if (isNaN(saldo)) {
    console.log('Valor Invalido!!!')
     return;
    
}

let tipoCliente = "premium"
if (saldo < 9) {
    tipoCliente = "basic"
    
}

else if (saldo >=10 && saldo < 20) {
    tipoCliente = "gold"
    
}
else {
    tipoCliente = null
}

if (!tipoCliente){
    tipoCliente = "Supremme"
}

console.log('tipoDoCliente', tipoCliente)

