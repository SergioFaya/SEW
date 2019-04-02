var ballRadiusJQuery;
var paddleHeigthJQuery;
var heightJQuery;
var widthJQuery;
var otherClicked = false;
$(document).ready(function () {
    document.getElementById("btnStart").disabled = true;

    $("#btnStart").click(function () {
        $("#btnFullScreen").show();
        $("#btnStart").hide();
        $("#pDisfruta").hide();
        $(".dataSelection").hide();
        $("#inputHeight").hide();
        $("#inputWidth").show();
        if(otherClicked){
            heightJQuery = $("#txtHeight").val();
            widthJQuery = $("#txtWidth").val();
        }
        $("#divCanvas").append('<canvas id="gameCanvas" width="' + widthJQuery + '" height="' + heightJQuery + '" tabindex="1"></canvas>');

        var paddleSizeAux = $("#txtPaddleSize").val();
        var ballRadiusAux = $("#txtBallSize").val();
        if (paddleSizeAux.trim() != "") {
            paddleHeigthJQuery = paddleSizeAux;
        } else {
            paddleHeigthJQuery = 100;
        }
        if (ballRadiusAux.trim() != "") {
            ballRadiusJQuery = ballRadiusAux;
        } else {
            ballRadiusJQuery = 10;
        }
        
        $.getScript("pong.js", function () {
            Pong(eval(ballRadiusJQuery),eval(paddleHeigthJQuery),10);
            play();
        });
    });

    $("#btnSizeOther").click(function () {
        $("#inputHeight").show();
        $("#inputWidth").show();
        $("#btnSizeSmall").hide();
        $("#btnSizeMedium").hide();
        $("#btnSizeBig").hide();
        $("#btnSizeOther").hide();
        document.getElementById("btnStart").disabled = false;
        otherClicked = true;
    });

    $("#btnFullScreen").click(function () {
        var canvas = document.getElementById("gameCanvas");
        if (canvas.requestFullScreen)
            canvas.requestFullScreen();
        else if (canvas.webkitRequestFullScreen)
            canvas.webkitRequestFullScreen();
        else if (canvas.mozRequestFullScreen)
            canvas.mozRequestFullScreen();
    });

    $("#btnSizeSmall").click(function () {
        $("#btnSizeMedium").hide();
        $("#btnSizeBig").hide();
        $("#btnSizeOther").hide();
        document.getElementById("btnStart").disabled = false;
        heightJQuery = 400;
        widthJQuery = 600;
    });

    $("#btnSizeMedium").click(function () {
        $("#btnSizeSmall").hide();
        $("#btnSizeBig").hide();
        $("#btnSizeOther").hide();
        document.getElementById("btnStart").disabled = false;
        heightJQuery = 600;
        widthJQuery = 800;
    });

    $("#btnSizeBig").click(function () {
        $("#btnSizeSmall").hide();
        $("#btnSizeMedium").hide();
        $("#btnSizeOther").hide();
        document.getElementById("btnStart").disabled = false;
        heightJQuery = 800;
        widthJQuery = 1000;
    });
});