// Variaveis globais
let nome_cachorro = [];
let img = document.getElementById('foto-cao');
let nome = document.getElementById('nome-cao');
let tempoMedio = document.getElementById('tempo-medio-vida-cao');
let altura = document.getElementById('tamanho-cao');
let peso = document.getElementById('peso-cao');

let bars = document.querySelector('#bars');
let menu = document.querySelector('#menu');
let article = document.querySelector('#article')

let subtitle = document.getElementById('subtitle-info-cao');
subtitle.innerHTML = 'Infomações adicionaes dos Dogs';

// // classe protótipo (MODELO)- paradygma (POO)
class Cachorro {
    constructor(nome) {
        this.nome = nome;
    }

    // Função que retorna uma promisse API
    async retornarApi() {
        let response = await fetch(`https://api.thedogapi.com/v1/images/search/`).then(resposta => {
            return resposta.json();
        });
        let novoResponse = response.filter((item, indice, array) => {
            img.setAttribute('src', `${item.url}`);
            nome.innerHTML = `<span>Nome do cão: </span>${item.id}`;
        })
        // Chamada de função
        this.tamanhoDoCao(response);
        // Chamada de função
        this.pesoCao(response);
    }


    // Função que retornar o tempo de vida do cachorro
    tempoDevidaDoCao() {
        return tempoMedio.innerHTML = '<span>Tempo médio de vida do cão: </span>Entre 10 a 13 Anos';
    }

    // Função que retorna o tamanho do cachorro
    tamanhoDoCao(value) {
        let resultAltura = (value[0].height / 100);
        return altura.innerHTML = `<span>Altura: </span>${resultAltura} cm`;
    }

    // Função que retorna o peso do cachorro
    pesoCao(value) {
        let resultLargura = parseFloat((value[0].width) / 100).toFixed(2);
        return peso.innerHTML = `<span>Largura: </span>${resultLargura} cm`;
    }


    // Função do menu responsivo
    menuHambuerguer(){
        // Quando é clicado no botao de menu é capturado o evento
        bars.addEventListener('click', e => {
            if (menu.classList.contains('hidden') && window.innerWidth < 640) {
                menu.classList.remove('hidden');
                menu.classList.add(
                    'flex',
                    'flex-col',
                    'text-center',
                    'w-full',
                    'absolute',
                    'top-16',
                    'bg-slate-600',
                    'm-0',
                )
                article.classList.add(
                    'mt-32'
                )
            } else{
                menu.classList.add('hidden')
            }
        
        })
        
        // Quando é a pagina é redimensionada é capturado o evento
        window.addEventListener('resize', e => {
            if(window.innerWidth > 639){
                menu.classList.add('hidden');
                menu.classList.remove(
                    'flex',
                    'flex-col',
                    'text-center',
                    'w-full',
                    'absolute',
                    'top-16',
                    'bg-slate-600',
                )
            }
        })
    }
}

let cachorro = new Cachorro(nome_cachorro);
cachorro.retornarApi()
cachorro.tempoDevidaDoCao();
cachorro.menuHambuerguer();
