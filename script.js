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
    const ballSize = ball.clientWidth;
    const x = Math.random() * (window.innerWidth - ballSize - 40) + 20; // Ensure half the ball is visible
    const y = Math.random() * (window.innerHeight - ballSize);
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
