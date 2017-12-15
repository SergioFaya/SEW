
var matchingTags = [];
var wordToFind = null;

window.onload = function () {
    $("#btnFind").click(function () {
        wordToFind = $("#txtFind").val();
        parseText();
    });
}

function parseText() {
    $(".resource", document.body).each(function () {
        var uppercaseContent = this.innerText;
        
            uppercaseContent = uppercaseContent.replace(wordToFind, colorize(wordToFind));

            this.innerHTML = uppercaseContent;
            $(this).replaceWith(this.outerHTML);
    
    });
}

function colorize(word) {
    return '<span style="color:red">' + word + '</span>'
}