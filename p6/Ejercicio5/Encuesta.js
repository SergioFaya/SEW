
class Encuesta {
    //nombre apellidos sexo edad y email
    showDataForm() {
        this.insertRow(0, "UO:", "textUO", "text");
        this.insertRow(1, "Nombre:", "textNombre", "text");
        this.insertRow(2, "Edad:", "textEdad", "text");
        this.insertRow(3, "email:", "textEmail", "text");
        this.insertRowComboBoxGenre(4, "Sexo:");
    }

    insertRowComboBoxGenre(pos, textLabel) {
        var table = document.getElementById("tableuser");
        var row = table.insertRow(pos);
        var cellLabel = row.insertCell(0);
        var textNode = document.createTextNode(textLabel);
        cellLabel.appendChild(textNode);
        var cellText = row.insertCell(1);
        var select = document.createElement("select");
        select.id = "cbSelectGenre";
        var male = document.createElement("option");
        male.text = "Masculino";
        male.value = "Masculino";
        var female = document.createElement("option");
        female.text = "Femenino";
        female.value = "Femenino";
        var other = document.createElement("option");
        other.text = "Prefiero no posicionarme ya que el sexo no es algo que determine a la persona sino sus intenciones";
        other.value = "Prefiero no posicionarme ya que el sexo no es algo que determine a la persona sino sus intenciones";
        select.appendChild(male);
        select.appendChild(female);
        select.appendChild(other);
        cellText.appendChild(select);


    }

    insertRow(pos, textLabel, inputID, type) {
        var table = document.getElementById("tableuser");
        var row = table.insertRow(pos);
        var cellLabel = row.insertCell(0);
        var textNode = document.createTextNode(textLabel);
        cellLabel.appendChild(textNode);
        var cellText = row.insertCell(1);
        var input = document.createElement("input");
        input.type = type;
        input.name = inputID;
        input.id = inputID;
        input.size = 10;
        cellText.appendChild(input);
    }

    hideDataForm() {
        var table = document.getElementById("tableuser");
        var lenght = table.getElementsByTagName("tr").length;
        while (lenght > 0) {
            lenght--;
            table.deleteRow(lenght);
        }
    }

    clickTerms() {
        var checkbox = document.getElementById("chboxAcceptTerms");
        if (checkbox.checked) {
            this.showDataForm();
        }
        else {
            this.hideDataForm();
        }
    }

    sendMail() {
        var checkAccept = document.getElementById("chboxAcceptTerms").checked;
        if (!checkAccept) {
            alert("Debes aceptar la politica de datos de la encuesta para poder enviar");
        } else {
            var uo = document.getElementById("textUO").value.trim();
            var nombre = document.getElementById("textNombre").value.trim();
            var edad = document.getElementById("textEdad").value.trim();
            var email = document.getElementById("textEmail").value.trim();
            if (uo == "" || nombre == "" || edad == "" || email == "") {
                alert("Los campos de informacion del usuario son obligatorios")
            }
        }
    }
}

var encuesta = new Encuesta();