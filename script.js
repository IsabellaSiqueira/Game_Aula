// const game = document.querySelector('.game');
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

let frames = 0; // TODO: Verificar se necessita colocar no startGame.

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

function game() {
    // state = State.play;

    function loop() {
        update();
        render();
        requestAnimationFrame(loop);
    };

    requestAnimationFrame(loop);

    function update() {
        if (state === State.play) {
            frames++;
        };
    };

    function render() {
        if (state === State.play) {
            message.innerHTML = 'Loop rodando em' + frames;
        }
    }
};

function endGame() {
    function lostPositionBird() {
        bird.style.transform = 'scaleY(-1)';
    };

    lostPositionBird();
};


endGame();
