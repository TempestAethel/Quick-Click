let score = 0;
let highScore = localStorage.getItem('highscore') || 0;
const ball = document.getElementById('ball');
const scoreDisplay = document.getElementById('score');
const highScoreDisplay = document.getElementById('highscore');

function updateScore() {
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
    if (score > highScore) {
        highScore = score;
        localStorage.setItem('highscore', highScore);
        highScoreDisplay.textContent = `High Score: ${highScore}`;
    }
}

function randomPosition() {
    const x = Math.random() * (window.innerWidth - ball.clientWidth);
    const y = Math.random() * (window.innerHeight - ball.clientHeight);
    ball.style.transform = `translate(${x}px, ${y}px)`;
}

ball.addEventListener('click', () => {
    updateScore();
    randomPosition();
});

// Initialize game
function startGame() {
    score = 0; // Reset score
    scoreDisplay.textContent = `Score: ${score}`;
    highScoreDisplay.textContent = `High Score: ${highScore}`;
    randomPosition();
    setInterval(randomPosition, 1000); // Move ball every second
}

startGame();
