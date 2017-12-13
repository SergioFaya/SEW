
var matchingTags = [];
var wordToFind = null;

window.onload = function () {
    $("#btnFind").click(function () {
        wordToFind = $("#txtFind").val();
        parseText();
    });
}

function parseText() {
    $("*:contains('" + wordToFind + "')", document.body).each(function () {
        var uppercaseContent = this.innerHTML;
        var contentSplit = uppercaseContent.split(" ");
        var aux = contentSplit;

        for (let i = 0; i < contentSplit.length; i++) {
            if (contentSplit[i].toUpperCase().trim() == wordToFind.toUpperCase().trim()) {
                aux[i] = colorize(contentSplit[i].trim());
            }
        }
        var finalString = "";
        for (let i = 0; i < aux.length; i++) {
            finalString += aux[i] + " ";
        }

        this.innerHTML = finalString;
        $(this).replaceWith(this.outerHTML);
    });
}

function colorize(word) {
    return '<span style="color:red">' + word + '</span>'
}