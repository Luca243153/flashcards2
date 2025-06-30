function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'


    cartao.innerHTML = `<div class="cartao__conteudo">
                    <h3>Música</h3>
                    <div class="cartao__conteudo__pergunta">
                        <p>Quando a Billie Eilish nasceu?</p>
                    </div>
                    <div class="cartao__conteudo__resposta">
                        <p>18/12/2001</p>
                    </div>
                </div>`
    container.appendChild(cartao)
}