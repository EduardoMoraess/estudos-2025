// Seleciona os elementos do Mario e do cano (pipe) na página
const Mario = document.querySelector('.mario');
const Pipe = document.querySelector('.pipe');

// Função para fazer o Mario pular
const jump = () => {
    if (!Mario.classList.contains('jump')) { // Garante que o pulo não seja acumulado
        Mario.classList.add('jump');

        // Remove a classe 'jump' após 500ms para que a animação possa ser repetida
        setTimeout(() => {
            Mario.classList.remove('jump');
        }, 500);
    }
};

// Loop que verifica constantemente as posições do Mario e do cano
const loop = setInterval(() => {
    const PipePosition = Pipe.offsetLeft; // Posição atual do cano
    const MarioPosition = +window.getComputedStyle(Mario).bottom.replace('px', ''); // Posição vertical do Mario

    // Condição para detectar a colisão entre o Mario e o cano
    if (PipePosition <= 120 && PipePosition > 0 && MarioPosition < 80) {
        // Para a animação do cano e mantém na posição atual
        Pipe.style.animation = 'none';
        Pipe.style.left = `${PipePosition}px`;

        // Para a animação do Mario e mantém na posição atual
        Mario.style.animation = 'none';
        Mario.style.bottom = `${MarioPosition}px`;

        // Altera a imagem do Mario para o estado de "game over"
        Mario.src = 'img/game-over.png';
        Mario.style.width = '75px'; // Ajuste opcional para o tamanho da imagem
        Mario.style.marginLeft = '50px'; // Ajuste opcional para o posicionamento

        // Finaliza o loop
        clearInterval(loop);
    }
}, 10);

// Adiciona eventos de teclado e toque para acionar o pulo do Mario
document.addEventListener('keydown', jump);
document.addEventListener('touchstart', jump);
