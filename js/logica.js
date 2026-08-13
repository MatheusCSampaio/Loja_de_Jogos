let quantidade = 0;

const contador = document.getElementById("contador");
const botoes = document.querySelectorAll(".comprar");

botoes.forEach(function(botao) {
    botao.addEventListener("click", function() {
        quantidade++;
        contador.textContent = quantidade;
    });
});

const carrinhoBtn = document.getElementById("carrinho-btn");
const modal = document.getElementById("carrinho-modal");

carrinhoBtn.addEventListener("click", function(){
    modal.style.display = "block";
});