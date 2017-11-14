
    var canvas;
    var canvasContext;
    var ballX = 50;
    var ballY = 50;
    var ballSpeedX = 5;
    var ballSpeedY = 5;
    var framesPerSecond = 30;
    var rectangleY = 1;
    var rectangleSpeedY = 1;

    window.onload = function(){
        canvas = document.getElementById('gameCanvas');
        canvasContext = canvas.getContext('2d');
        setInterval(callAll,1000/framesPerSecond);
    }

    function callAll(){
        moveEverything();
        drawEverything();
    }

    function moveEverything(){
        ballX += ballSpeedX;
        ballY += ballSpeedY;
        rectangleY += rectangleSpeedY;
        if(ballX <= 0 || ballX >= canvas.width){
            ballSpeedX = -ballSpeedX;
        }

        if(ballY <= 0 || ballY >= canvas.height){
            ballSpeedY = -ballSpeedY;
        }

        if(rectangleY<=0 || rectangleY >= canvas.height){
            rectangleSpeedY = -rectangleSpeedY;
        }
    }

    function drawEverything(){
        canvasContext.fillStyle = 'black';
        canvasContext.fillRect(0,0,canvas.width,canvas.height);
        canvasContext.fillStyle = 'white';
        canvasContext.fillRect(5,rectangleY, 10,150);
        canvasContext.fillStyle = 'red';
        canvasContext.fillRect(ballX,ballY,10,10);
    }
