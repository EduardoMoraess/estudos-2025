function gerarPalavras() {
    const palavrasBase = [
        "árvore", "sol", "lua", "montanha", "rio", "floresta", "vento", "pedra",
        "fogo", "areia", "oceano", "estrela", "nuvem", "chave", "porta", "espelho",
        "fada", "dragão", "cachoeira", "pássaro", "sonho", "mundo", "tempo", "luz"
    ];

    const palavrasSelecionadas = [];
    const totalPalavras = 12;

    while (palavrasSelecionadas.length < totalPalavras) {
        const indexAleatorio = Math.floor(Math.random() * palavrasBase.length);
        const palavra = palavrasBase[indexAleatorio];

        if (!palavrasSelecionadas.includes(palavra)) {
            palavrasSelecionadas.push(palavra);
        }
    }

    document.getElementById("resultado").textContent = palavrasSelecionadas.join(" ");
}