
class Encuesta{
    //nombre apellidos sexo edad y email
    showDataForm(){
        this.insertRow(0,"UO:","textUO","text");
        this.insertRow(1,"Nombre:","textNombre","text");
        this.insertRow(2,"Edad:","textUO","text");
        this.insertRow(3,"email:","textEmail","text");
        this.insertRowComboBoxGenre(4,"Sexo:");
    }

    insertRowComboBoxGenre(pos,textLabel){
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
        other.text = "LGBTQIA";
        other.value = "LGBTQIA";
        var negros = document.createElement("option");
        negros.text = "negros";
        negros.value = "negros";
        var moros = document.createElement("option");
        moros.text = "moros";
        moros.value = "moros";
        var panchitos = document.createElement("option");
        panchitos.text = "panchitos";
        panchitos.value = "panchitos";
        var rumanos = document.createElement("option");
        rumanos.text = "rumanos";
        rumanos.value = "rumanos";
        select.appendChild(male);
        select.appendChild(female);
        select.appendChild(other);
        select.appendChild(negros);
        select.appendChild(moros);
        select.appendChild(panchitos);
        select.appendChild(rumanos);
        cellText.appendChild(select);
        
        
    }

    insertRow(pos,textLabel,inputID,type){
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

    hideDataForm(){
        var table = document.getElementById("tableuser");
        var lenght = table.getElementsByTagName("tr").length;
        while(lenght >0){
            lenght--; 
            table.deleteRow(lenght);
        }   
    }

    sendMail(){
        
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