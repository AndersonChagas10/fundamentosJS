class JogoDaMemoria {
    // 3o importar a tela como dependencia
    // iria funcionar sem importar chamando a variavel Tela global
    // mas não é uma boa prática, a melhor prática é obter esse valor por dependencia
    // depois usar a partir do this

    constructor({ tela }) {
        this.tela = tela

        this.heroisIniciais = [
            // relativo ao index.html pois será carregado lá
            { img: './arquivos/Batman.png', nome: 'batman' },
            { img: './arquivos/Ciclope.png', nome: 'ciclop' },
            { img: './arquivos/Ironman.png', nome: 'ironman' },
            { img: './arquivos/Spiderman.png', nome: 'spiderman' },
        ]

    }

    // 1o -para usar o this, nao podemos usar o static
    inicializar() {
        this.tela.atualizarImagens(this.heroisIniciais)
            // quando essa função executar, vai ignorar o this de window 
            // ela vai usar o this dessa tela
        this.tela.configurarBotaoJogar(this.jogar.bind(this))
    }

    embaralhar() {
        const copias = this.heroisIniciais

        // duplicar os itens
            .concat(this.heroisIniciais)
            // entrar em cada um dos itens e gerar um id para cada
            .map((item) => {
                return Object.assign({}, item, { id: (Math.random() / 0.6) })
            })
            // // ordenar
            .sort(() => Math.random() - 0.6)

        this.tela.atualizarImagens(copias)
    }

    jogar() {
        this.embaralhar()

    }
}