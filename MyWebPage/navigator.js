
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
        var content = this.innerText;
        var input = wordToFind;
        var letters = input.split("");
        var permCount = 1 <<input.length;
        //Crea todas las posibles combinaciones de mayusculas y minusculas dentro de la palabra que se quiere encontrar
        for (let perm = 0; perm < permCount; perm++) {
            letters.reduce((perm, letter, i) => {
              letters[i] = (perm & 1) ? letter.toUpperCase() : letter.toLowerCase();
              return perm >> 1;
            }, perm);
            
            var result = letters.join("");
            content = content.replace(result, colorize(result));
          }
        this.innerHTML = content;
        $(this).replaceWith(this.outerHTML);

    });
}

function colorize(word) {
    return '<span style="color:red">' + word + '</span>'
}