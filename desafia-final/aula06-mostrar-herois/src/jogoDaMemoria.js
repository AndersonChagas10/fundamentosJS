class JogoDaMemoria {
    // 3o importar a tela como dependencia
    // iria funcionar sem importar chamando a variavel Tela global
    // mas não é uma boa prática, a melhor prática é obter esse valor por dependencia
    // depois usar a partir do this

    constructor({ tela }) {
        this.tela = tela
        this.iconePadrao = './arquivos/default.png'
        this.heroisIniciais = [
            // relativo ao index.html pois será carregado lá
            { img: './arquivos/Batman.png', nome: 'batman' },
            { img: './arquivos/Ciclope.png', nome: 'ciclop' },
            { img: './arquivos/Ironman.png', nome: 'ironman' },
            { img: './arquivos/Spiderman.png', nome: 'spiderman' },
        ]

        this.heroisEscondidos = []
        this.heroisSelecionados = []

    }

    // 1o -para usar o this, nao podemos usar o static
    inicializar() {
        this.tela.atualizarImagens(this.heroisIniciais)
            // quando essa função executar, vai ignorar o this de window 
            // ela vai usar o this dessa tela
        this.tela.configurarBotaoJogar(this.jogar.bind(this))
        this.tela.configurarBotaoVerificarSelecao(this.verificarSelecao.bind(this))
    }


    esconderHerois(herois) {
        //vai trocar todos os herois pelo icon padrão 
        //como foi feito no construtor, vamos extrair somente o necessario
        //usando a sintaxe({chave : 1}) ta falando que vai retornar o que tiver dentro0 dos parentese
        //quando não usamos : (exemplo do id), o JS entende que o nome 
        //é o mesmo do valo. Ex. id: id, vira is
        const heroisOcultos = herois.map(({ nome, id }) => ({
                id,
                nome,
                img: this.iconePadrao
            }))
            //atualizamos a tela com os herois ocultos
        this.tela.atualizarImagens(heroisOcultos)
            //guardamos os herois para trabalhar com eles depois
        this.heroisEscondidos = heroisOcultos
    }
    embaralhar() {
        const copias = this.heroisIniciais

        // duplicar os itens
            .concat(this.heroisIniciais)
            // entrar em cada um dos itens e gerar um id para cada
            .map((item) => {
                return Object.assign({}, item, { id: (Math.random() / 0.5) })
            })
            // ordenar
            .sort(() => Math.random() - 0.5)

        this.tela.atualizarImagens(copias)
        setTimeout(() => {
            this.esconderHerois(copias)
        }, 3000);
    }
    exibirHerois(nomeDoHeroi) {
        //vamos procurar esse heroi pelo nome
        //vamos obter somente a imagem dele
        const { img } = this.heroisIniciais.find(({ nome }) => nomeHeroi === nome)
        this.tela.exibirHerois(nomeHeroi, img)
    }
    verificarSelecao(id, nome) {
        const item = { id, nome }
            //verificar a quantidade de herois selcionados
            //e tomar a decisão em relação ao jogo se esta certo ou não
        const heroisSelecionados = this.heroisSelecionados.length
        switch (heroisSelecionados) {
            case 0:
                this.heroisSelecionados.push(item)
                break;
            case 1:
                const [opcao1] = this.heroisSelecionados
                    // zerar itens, para nao selecionar mais de dois
                this.heroisSelecionados = []
                    //conferimos se o nome bate conforme o esperado
                let deveMostrarMensagem = false
                if (opcao1.nome === item.nome &&
                    //aqui verifica se o id é diferente para o usuario n clicar duas vezes no mesmo heroi
                    opcao1.id !== id) {
                    deveMostrarMensagem = true
                    this.exibirHerois(item.nome)
                    alert('combinação correta!')
                        //parar a execução
                    return;
                }
                alert('combinação incorreta!')


                break;
        }

    }
    jogar() {
        this.embaralhar()

    }
}