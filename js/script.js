const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const scoreElement = document.querySelector('.score'); // Elemento HTML para exibir o placar
let distance = 0; // Variável para armazenar a distância percorrida
let gameLoop; // Variável para o intervalo do jogo

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const updateScore = () => {
    scoreElement.textContent = distance; // Atualiza o valor do placar no elemento HTML
}

function somTheme() {
    const audio = new Audio('./soms/smb_world_clear.wav');
    audio.loop = true;
    audio.play();
  }
  
  window.addEventListener('load', somTheme);

const startGame = () => {
    gameLoop = setInterval(() => {
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
          
          if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
              pipe.style.animation = 'none';
              pipe.style.left = `${pipePosition}px`;
              function marioDie() {
                  const audio = new Audio('./soms/smb_mariodie.wav');
                  audio.play();
                }        
            marioDie()

            mario.src = './images/game-over.png';
            mario.style.width = '75px';
            mario.style.marginLeft = '50px';
            clearInterval(gameLoop);
            alert('Game Over!');
        }

        distance++; // Incrementa a distância percorrida
        updateScore(); // Atualiza o placar
    }, 10);
}

document.addEventListener('keydown', jump);

startGame();
