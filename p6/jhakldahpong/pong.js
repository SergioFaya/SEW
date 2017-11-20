/*<script>
    const PADDLE_HEIGHT = 100;
    const PADDLE_WIDTH = 10;

    var canvas;
    var canvasContext;.

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
"no strict"
class Pong{
    static self = this;
    constructor(){
        const PADDLE_HEIGHT = 100;
        const PADDLE_WIDTH = 10;
        var canvas = document.getElementById("gameCanvas");
        var canvasContext = this.canvas.getContext("2d");
     
        this.ballX = 400;
        this.ballY = 300;
        this.ballSpeedX = 7;
        this.ballSpeedY = 3;
        this.paddleSpeed = 5;
        this.framesPerSecond = 30;
    
        this.paddleLeftY = 150;
        this.paddleLeftX = 5;
        this.paddleRightY = 150;
        this.paddleRightX = 800 - this.PADDLE_WIDTH - this.paddleLeftX;
    }


    defineInterval(){
        setInterval(this.callAll(), 1000 / this.framesPerSecond);
    }

    callAll() {
        this.moveEverything();
        this.drawEverything();
    }

    keyDown(evt) {
        var key = event.which || event.keyCode;
        if (key == "38") {
            this.paddleRightY = this.paddleRightY - 10;
        } else if (key == "40") {
            this.paddleRightY = this.paddleRightY + 10;
        } else if (key == "87") {
            this.paddleLeftY = this.paddleLeftY - 10;
        } else if (key == "83") {
            this.paddleLeftY = this.paddleLeftY + 10;
        }             
    }   

    drawEverything() {
        this.canvasContext.fillStyle = 'black';
        this.canvasContext.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.canvasContext.fillStyle = 'white';
        this.canvasContext.beginPath();
        this.canvasContext.arc(this.ballX, this.ballY, 10, 10, Math.PI, true);
        this.canvasContext.fill();
        this.canvasContext.fillStyle = 'white';
        this.canvasContext.fillRect(this.paddleLeftX, this.paddleLeftY, this.PADDLE_WIDTH, this.PADDLE_HEIGHT);
        this.canvasContext.fillStyle = 'white';
        this.canvasContext.fillRect(this.paddleRightX, this.paddleRightY, this.PADDLE_WIDTH, this.PADDLE_HEIGHT);
    }

    moveEverything() {
        this.ballX = this.ballX + this.ballSpeedX;
        this.ballY = this.ballY + this.ballSpeedY;

        if (this.ballX <= 0) {
            if (this.ballY > this.paddleLeftY && this.ballY < this.paddleLeftY + this.PADDLE_HEIGHT) {
                this.ballSpeedX = this.ballSpeedX * -1;
            } else {
                this.ballReset();
            }
        }

        if (this.ballX >= this.canvas.width) {
            if (this.ballY > this.paddleRightY && this.ballY < this.paddleRightY + this.PADDLE_HEIGHT) {
                this.ballSpeedX = this.ballSpeedX * -1;
            } else {
                this.ballReset();
            }
        }

        if (this.ballY <= 0 || this.ballY >= this.canvas.height) {
            this.ballSpeedY = this.ballSpeedY * -1;
        }
    }

    ballReset() {
        this.ballSpeedX = this.ballSpeedX * -1;
        this.ballX = this.canvas.width/2;
        this.ballY = this.canvas.height/2;
    }
}

var pong = new Pong();
