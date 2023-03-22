/*objetivo - quando clicar no botão, mostrara a imagem de fundo correspondente*/

// passo 1 - dar um jeito de pegar o elemento HTML dos botões 
    const botoesCarrossel = document.querySelectorAll('.botao');
    const imagens = document.querySelectorAll('.imagem')

// passo 2 - dar um jeito de identificar o clique do usuario no botão
    botoesCarrossel.forEach((botao, indice) => {
        botao.addEventListener('click', () => { 

        desativarBoataoSelecionado();

        selecionarBotaoCarrossel(botao);

        esconderImagemAtiva();

        mostrarImagemDeFundo(indice);

         
    })
})

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBoataoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
