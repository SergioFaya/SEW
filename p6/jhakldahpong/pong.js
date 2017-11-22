/*<script>
    const PADDLE_HEIGHT = 100;
    const PADDLE_WIDTH = 10;

    var canvas;
    var canvasContext;

    var ballX = 400;
    var ballY = 300;
    var ballSpeedX = 7;
    var ballSpeedY = 3;
    var paddleSpeed = 5;
    var framesPerSecond = 30;

    var paddleLeftY = 150;
    var paddleLeftX = 5;
    var paddleRightY = 150;
    var paddleRightX = 800 - PADDLE_WIDTH - paddleLeftX;


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

    window.onload = function () {
        canvas = document.getElementById('gameCanvas');
        canvasContext = canvas.getContext('2d');
        setInterval(callAll, 1000 / framesPerSecond);

        
        document.addEventListener("keydown", function (evt) {
            var key = event.which || event.keyCode;
            if (key == "38") {
                paddleRightY = paddleRightY - 10;
            } else if (key == "40") {
                paddleRightY = paddleRightY + 10;
            } else if (key == "87") {
                paddleLeftY = paddleLeftY - 10;
            } else if (key == "83") {
                paddleLeftY = paddleLeftY + 10;
            }     
            
        })
    }

    function callAll() {
        moveEverything();
        drawEverything();
    }

    function ballReset() {
        ballSpeedX = -ballSpeedX;
        ballX = 400;
        ballY = 300;
    }

    function moveEverything() {
        ballX = ballX + ballSpeedX;
        ballY = ballY + ballSpeedY;

        if (ballX <= 0) {
            if (ballY > paddleLeftY && ballY < paddleLeftY + PADDLE_HEIGHT) {
                ballSpeedX = -ballSpeedX;
            } else {
                ballReset();
            }
        }

        if (ballX >= canvas.width) {
            if (ballY > paddleRightY && ballY < paddleRightY + PADDLE_HEIGHT) {
                ballSpeedX = -ballSpeedX;
            } else {
                ballReset();
            }
        }

        if (ballY <= 0 || ballY >= canvas.height) {
            ballSpeedY = -ballSpeedY;
        }
    }

    function drawEverything() {
        canvasContext.fillStyle = 'black';
        canvasContext.fillRect(0, 0, canvas.width, canvas.height);
        canvasContext.fillStyle = 'white';
        canvasContext.beginPath();
        canvasContext.arc(ballX, ballY, 10, 10, Math.PI, true);
        canvasContext.fill();
        //        canvasContext.fillRect(ballX, ballY, 10, 10);
        canvasContext.fillStyle = 'white';
        canvasContext.fillRect(paddleLeftX, paddleLeftY, PADDLE_WIDTH, PADDLE_HEIGHT);
        canvasContext.fillStyle = 'white';
        canvasContext.fillRect(paddleRightX, paddleRightY, PADDLE_WIDTH, PADDLE_HEIGHT);
    }
</script>
*/