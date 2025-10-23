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

let frames = 0;
const topBound = 0;
const bottomBound = window.innerHeight;

const gravity = 0.5;
const flap = -8;
let velocityY = 0;

let velocityX = -1;

function resetPositionBird() {
    bird.style.top = '40vh';
    bird.style.left = '30vw';
    bird.style.transform = 'none';
}

function resetGameVariables() {
    score = 0;
    frames = 0;
    velocityY = 0;
}

function startGame() {
    resetGameVariables();
    resetPositionBird();
}

function endGame() {
    state = State.end;
    message.innerHTML = 'Game Over! Pressione Enter para reiniciar.';
    bird.style.transform = 'scaleY(-1)';
};

function flapBird() {
    velocityY = flap;
};

function update() {
    if (state === State.play) {
        // score++;
        frames++;
        velocityY += gravity;
        const box = bird.getBoundingClientRect();
        let newY = box.top + velocityY;

        if (newY >= bottomBound - box.height) {
            newY = bottomBound - box.height;
            endGame();
        } else if (newY <= topBound) {
            newY = topBound;
            velocityY = 0;
        }

        bird.style.top = newY + 'px';
    };
};

function render() {
    if (state === State.play) {
        message.innerHTML = 'Loop rodando em: ' + frames;
    }
}

function loop() {
    update();
    render();
    requestAnimationFrame(loop);
};

document.addEventListener('keydown', (event) => {
    if (state === State.start || state === State.end) {
        if (event.key === "Enter") {
            state = State.play;
            startGame();
            message.innerHTML = 'Voa, Voa, Voa!';
            event.preventDefault();
        }
    } else if (state === State.play) {
        if (event.key === " ") {
            flapBird();
            event.preventDefault();
        }
    }
});

startGame();
requestAnimationFrame(loop);