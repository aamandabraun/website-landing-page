const botao = document.getElementById('botao-dark');
const body = document.body;

if (botao) {
    botao.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        console.log("Modo Dark alternado!"); 
    });
} else {
    console.log("Erro: Botão não encontrado no HTML!");
}