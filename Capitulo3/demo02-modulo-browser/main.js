window.onload = () => {
    console.log('tela carregou!!!')
    const btn = document.getElementById('btnCalcular')
    btn.onclick = click
    function obterValorInput(id){
        const item = document.getElementById(id)
       return item.value
    }S

        function click(){
            const tipoOperacao = obterValorInput('tipoOperacao')
            const valor1 = obterValorInput('valor1')
            const valor2 = obterValorInput('valor2')
            const resultado = matematica[tipoOperacao ](
                valor1, valor2
            )

            console.log('Resultado', resultado)
            document.getElementById('resultado')
                    .innerText = `
                    A operação de ${tipoOperacao}, ${valor1} por ${valor2} é ${resultado}`

        }
    }