var PADDLE_HEIGHT;
const PADDLE_WIDTH = 10;

var canvas;
var canvasContext;

var copyHeigth;
var copyWidth;

var ballX;
var ballY;
var ballSpeedX;
var ballSpeedY;
var ballDirectionX;
var ballDirectionY;
var ballRadius;

var framesPerSecond;

var ticks;
var speedIncreaseRatio;
var paddleSpeed;
var paddleLeftY;
var paddleLeftX;
var paddleRightY;
var paddleRightX;

var leftPoints;
var rightPoints;
var started;
var points;

var ended;
//Constructor
function Pong(ballR, paddleH, pointsTop) {
    this.ballRadius = ballR;
    this.PADDLE_HEIGHT = paddleH;

    this.canvas = document.getElementById('gameCanvas');
    this.canvasContext = canvas.getContext('2d');

    this.copyHeigth = canvas.height;
    this.copyWidth = canvas.width;
    this.ballX = canvas.width / 2;
    this.ballY = canvas.height / 2;
    this.ballSpeedX = 7;
    this.ballSpeedY = 3;
    this.ballDirectionX = 1;
    this.ballDirectionY = 1;
    this.framesPerSecond = 30;
    this.ticks = 0;

    this.speedIncreaseRatio = 500;
    this.paddleSpeed = 15;
    this.paddleLeftY = canvas.height / 2 - PADDLE_HEIGHT / 2;
    this.paddleLeftX = 0;
    this.paddleRightY = canvas.height / 2 - PADDLE_HEIGHT / 2;
    this.paddleRightX = canvas.width - PADDLE_WIDTH - paddleLeftX;

    this.leftPoints = 0;
    this.rightPoints = 0;
    this.started = 0;
    this.points = pointsTop;
    this.ended = 0;
}

//Events

function calculateMousePos(evt) {
    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;
    var mouseX = evt.clientX - rect.left - root.scrollLeft;
    var mouseY = evt.clientY - rect.top - root.scrollTop;
    return {
        x: mouseX,
        y: mouseY
    };
}
/*
function on_fullscreen_change() {
    if (document.mozFullScreen || document.webkitIsFullScreen) {
        var rect = canvas.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
    }
    else {
        canvas.width = copyWidth;
        canvas.height = copyHeigth;
    }
}

document.addEventListener('mozfullscreenchange', on_fullscreen_change);
document.addEventListener('webkitfullscreenchange', on_fullscreen_change);
*/
//Logica de juego
function play() {
    initialDraw();
    drawStartMessage();
    setInterval(callAll, 1000 / framesPerSecond);
    //meter eventos con jquery y API fullscreen
    document.addEventListener("keydown", function (evt) {
        var key = event.which || event.keyCode;
        if (started == 1 && ended ==0) {
            if (key == "38") {
                if (paddleRightY >= paddleSpeed) {
                    paddleRightY = paddleRightY - paddleSpeed;
                }
            } else if (key == "40") {
                if (paddleRightY <= canvas.height - PADDLE_HEIGHT - paddleSpeed) {
                    paddleRightY = paddleRightY + paddleSpeed;
                }
            } else if (key == "87") {
                if (paddleLeftY >= paddleSpeed) {
                    paddleLeftY = paddleLeftY - paddleSpeed;
                }
            } else if (key == "83") {
                if (paddleLeftY <= canvas.height - PADDLE_HEIGHT - paddleSpeed) {
                    paddleLeftY = paddleLeftY + paddleSpeed;
                }
            }
        }
        if (key == "32" && ended ==0) {
            start();
        }
    })
}

function start() {
    started = 1;
}

function callAll() {
    if (started == 1) {
        moveEverything();
        drawEverything();
    }
    if(ended == 1){
        drawGameOver();
    }
}

function ballReset() {
    ticks = 0;
    ballSpeedX = 7 * ballDirectionX;
    ballSpeedY = 3 * ballDirectionY;
    ballX = canvas.width / 2;
    ballY = canvas.height / 2;
}

function paddleReset() {
    paddleRightY = canvas.height / 2 - PADDLE_HEIGHT / 2;
    paddleLeftY = canvas.height / 2 - PADDLE_HEIGHT / 2;
}

function moveEverything() {
    ballX += ballSpeedX * ballDirectionX;
    ballY += ballSpeedY * ballDirectionY;
    ticks++;
    increaseSpeed();
    if (ballX - ballRadius <= 0) {
        if (ballY + ballRadius >= paddleLeftY && ballY - ballRadius <= paddleLeftY + PADDLE_HEIGHT) {
            ballDirectionX = -ballDirectionX;
        } else {
            rightPoints++;
            stop();
        }
    }

    if (ballX + ballRadius >= canvas.width) {
        if (ballY + ballRadius >= paddleRightY && ballY - ballRadius <= paddleRightY + PADDLE_HEIGHT) {
            ballDirectionX = -ballDirectionX;
        } else {
            leftPoints++;
            stop();
        }
    }

    if (ballY - ballRadius <= 0 || ballY + ballRadius >= canvas.height) {
        ballDirectionY = -ballDirectionY;
    }

    if (rightPoints == points || leftPoints == points) {
        stop();
        rightPoints = 0;
        leftPoints = 0;
        ended = 1;
    }
}
function stop() {
    started = 0;
    ballReset();
    paddleReset();
}

function increaseSpeed() {
    if (ticks > speedIncreaseRatio) {
        if (ballDirectionX > 0) {
            ballSpeedX++;
        }
        ticks = 0;
    }
}

//Canvas
function drawPointsNumber(left, right) {
    canvasContext.font = "30px pixelFont";
    canvasContext.fillStyle = "yellowgreen";
    canvasContext.textAlign = "center";
    canvasContext.fillText(left, canvas.width - canvas.width * 2 / 3, canvas.height - canvas.height * 9 / 10);
    canvasContext.fillText(right, canvas.width - canvas.width / 3, canvas.height - canvas.height * 9 / 10);
}

function drawStartMessage() {
    canvasContext.font = "30px pixelFont";
    canvasContext.fillStyle = "yellowgreen";
    canvasContext.textAlign = "center";
    canvasContext.fillText("Pulsa espacio", canvas.width / 2, canvas.height / 2);
}

function drawGameOver() {
    canvasContext.font = "30px pixelFont";
    canvasContext.fillStyle = "yellowgreen";
    canvasContext.textAlign = "center";
    canvasContext.fillText("GAME OVER", canvas.width / 2, canvas.height / 2);
}

function initialDraw() {
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);
    canvasContext.beginPath();
    canvasContext.setLineDash([5, 15]);
    canvasContext.moveTo(canvas.width / 2, canvas.height);
    canvasContext.lineTo(canvas.width / 2, 0);
    canvasContext.strokeStyle = '#a0a0a0';
    canvasContext.stroke();
}

function drawEverything() {
    initialDraw();
    drawPointsNumber(leftPoints, rightPoints);
    canvasContext.fillStyle = 'white';
    canvasContext.beginPath();
    canvasContext.arc(ballX, ballY, ballRadius, ballRadius, Math.PI, true);
    canvasContext.fill();
    canvasContext.fillStyle = 'white';
    canvasContext.fillRect(paddleLeftX, paddleLeftY, PADDLE_WIDTH, PADDLE_HEIGHT);
    canvasContext.fillStyle = 'white';
    canvasContext.fillRect(paddleRightX, paddleRightY, PADDLE_WIDTH, PADDLE_HEIGHT);
}


