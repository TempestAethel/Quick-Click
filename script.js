let score = 0;
const ball = document.getElementById('ball');
const scoreDisplay = document.getElementById('score');
let interval;

function randomPosition() {
    const gameArea = document.getElementById('gameArea');
    const maxX = gameArea.clientWidth - ball.clientWidth;
    const maxY = gameArea.clientHeight - ball.clientHeight;
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    ball.style.transform = `translate(${x}px, ${y}px)`;
}

function increaseScore() {
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
}

ball.addEventListener('click', () => {
    increaseScore();
    randomPosition();
});

function startGame() {
    randomPosition();
    interval = setInterval(() => {
        randomPosition();
    }, 1000);
}

startGame();
