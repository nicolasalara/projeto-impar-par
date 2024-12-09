// Alerta uma mensagem quando a página carregar
window.onload = function() {
    alert("Seja muito bem vindo a minha humilde pagina com uma magica");
};
function mudarTexto() {
    // Obtém o elemento <p> com o id "resultado"
    const resultado = document.getElementById("resultado");

    // Gera um número aleatório entre 1 e 100 e exibe na tela
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    resultado.textContent = "o numero gerado foi: " + numeroAleatorio;

    // Verifica se o número é par ou ímpar e adiciona a informação
    if (numeroAleatorio % 2 === 0) {
        resultado.textContent += " (par)";
    } else {
        resultado.textContent += " (impar)";
    }
}

