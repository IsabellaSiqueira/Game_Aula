const game = document.querySelector('.game');
const bird = document.querySelector('.bird');
const hudScore = document.querySelector('.score');
const message = document.querySelector('.message');
const btnStart = document.querySelector('.btnStart');

const State = {
    start: "START",
    play: "PLAY",
    end: "END"
};

let state = State.start;

let score = 0;
let bestScore = 0; // TODO: Adicionar Lógica.

// btnStart.addEventListener('click', () => {
//     state = State.play;
//     message.innerHTML = 'Em Jogo'
// });

function startGame() {
    document.addEventListener('keydown', (event) => {
        if (event.key == "Enter") {
            state = State.play;
            console.log("No estado" + state);
            message.innerHTML = 'Voa, Voa, Voa!';
        }
    })
    
    function resetPositionBird() {
        bird.style.top = '40vh';
        bird.style.left = '30vw';
    }

    function resetScore() {
        score = 0;
    }

    resetPositionBird();
    resetScore();
};

startGame();