const ID_CONTEUDO = "conteudo"
const ID_BOTAO_JOGAR = "jogar"
class Tela {
    static obterCodigoHtml(item) {
        return `
        <div class="col-md-3">
            <div class="card" style="width: 50%;" onclick="window.window.verificarSelecao('${item.id}', '${item.nome}')">
        
                <img name="${item.nome}" src="${item.img}" class="card-img-top" alt="..." />
            </div>
            <br />
        </div> 
        `
    }
    static configurarBotaoVerificarSelecao(funcaoOnclick) {
        window.verificarSelecao = funcaoOnclick

    }
    static alterarConteudoHTML(codigoHtml) {
        const conteudo = document.getElementById(ID_CONTEUDO)
        conteudo.innerHTML = codigoHtml
    }
    static gerarStringHTMLPelaImagem(data) {
        return data.map(Tela.obterCodigoHtml).join('')
    }

    static atualizarImagens(itens) {
        const codigoHtml = Tela.gerarStringHTMLPelaImagem(itens)
        Tela.alterarConteudoHTML(codigoHtml)
    }
    static exibirHerois(nome, img) {

        const elements = document.getElementsByName(nome)
            //para cada elemento encontrado na tela, vamos aleterar a imagem para 
            //a imagem inicial dele 
            //com o forEach, para cada item, dentro dos () setamos o valor
            //de imagem
        elemetosHtml.forEach(item => (item.src = img))
    }

    static configurarBotaoJogar(funcaoOnclick) {
        const btnJogar = document.getElementById(ID_BOTAO_JOGAR)
        btnJogar.onclick = funcaoOnclick
    }



    static configurarClickVerificarSelecao(funcaoOnclick) {
        window.verificarSelecao = funcaoOnclick
    }
}