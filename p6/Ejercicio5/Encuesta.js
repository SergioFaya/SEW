
class Encuesta{
    showDataForm(){
        var table = document.getElementById("tableuser");
        var row = table.insertRow(0);
        var cellLabel = row.insertCell(0);
        var textNode = document.createTextNode("UO");
        cellLabel.appendChild(textNode);
        var cellText = row.insertCell(1);
        var input = document.createElement("input");
        input.type = "text";
        input.name = "txtRow";
        input.id = "txtRow";
        input.size = 10;
        cellText.appendChild(input);
    }

    hideDataForm(){
        var table = document.getElementById("tableuser");
        table.deleteRow(0);
    }

    onClick(){
        var checkbox = document.getElementById("chboxAcceptTerms");
        if(checkbox.checked){
            this.showDataForm();
        }
        else{
            this.hideDataForm();
        }
    }
}

var encuesta = new Encuesta();