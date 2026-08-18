let quantidade = 0;
let carrinho = [];

const contador = document.getElementById("contador");
const botoes = document.querySelectorAll(".comprar");

botoes.forEach(function(botao) {
    botao.addEventListener("click", function() {
        quantidade++;
        contador.textContent = quantidade;

        const nomeJogo = botao.dataset.nome;
        carrinho.push(nomeJogo);
        atualizarCarrinho();
        console.log(carrinho);
    });
});

const carrinhoBtn = document.getElementById("carrinho-btn");
const modal = document.getElementById("carrinho-modal");

carrinhoBtn.addEventListener("click", function(){
    modal.style.display = "block";
});

const listaCarrinho =
document.getElementById("lista-carrinho")

function atualizarCarrinho() {
    listaCarrinho.innerHTML = "";

    carrinho.forEach(function(jogo) {
        listaCarrinho.innerHTML +=
        `<p>${jogo}</p>`;
    });
}

const fecharModal =
document.getElementById("fechar-modal");

fecharModal.addEventListener(
    "click",
    function() {

        modal.style.display = "none";

    }
);