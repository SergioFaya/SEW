
class Encuesta {
    //nombre apellidos sexo edad y email

    clickTerms() {
        var checkbox = document.getElementById("chboxAcceptTerms");
        this.validate();
    }

    validate() {
        var checkAccept = document.getElementById("chboxAcceptTerms").checked;
        var txt = document.getElementById("txtMean");
        if (!checkAccept) {
            txt.value = "Debes aceptar la politica de datos de la encuesta para poder enviar";
        } else {
            this.validateDni();
            this.computeMean();
        }
    }

    validateDni() {
        var dni = document.getElementById("dni").value;
        var dniTxt = document.getElementById("txtDni");
        var numero;
        var letr;
        var letra;
        var expresion_regular_dni = /^\d{8}[a-zA-Z]$/;

        if (expresion_regular_dni.test(dni) == true) {
            numero = dni.substr(0, dni.length - 1);
            letr = dni.substr(dni.length - 1, 1);
            numero = numero % 23;
            letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
            letra = letra.substring(numero, numero + 1);
            if (letra != letr.toUpperCase()) {
                dniTxt.value = "Dni erroneo, la letra del NIF no se corresponde";
            } else {
                dniTxt.value = "Dni correcto";
            }
        } else {
            dniTxt.value = "Dni erroneo, formato no válido";
        }

    }

    computeMean() {
        var style = document.getElementById("cbRatingStyle");
        var styleSelectedValue = style.options[style.selectedIndex].value;
        var funct = document.getElementById("cbRatingFunction");
        var functSelectedValue = funct.options[funct.selectedIndex].value;
        var functRadio = this.getRadioFunctionality();
        var radioUsab = this.getRadioUsab();
        var mean = (eval(functRadio) + eval(radioUsab) + eval(styleSelectedValue) + eval(functSelectedValue)) / 4 + "";
        var result = document.getElementById("txtMean");
        result.value = "Media : " + mean.substring(0,3);
    }

    getRadioFunctionality() {
        var value = 0;
        var baja = document.getElementById("btnFunctBaja");
        var media = document.getElementById("btnFunctMedia");
        var alta = document.getElementById("btnFunctAlta");
        if (baja.checked) {
            value += 1 / 3;
        } else if (media.checked) {
            value += 2 / 3;
        } else if (alta.checked) {
            value += 3 / 3;
        }
        return value;
    }

    getRadioUsab() {
        var value = 0;
        var baja = document.getElementById("btnUsabBaja");
        var media = document.getElementById("btnUsabMedia");
        var alta = document.getElementById("btnUsabAlta");
        if (baja.checked) {
            value += 1 / 3;
        } else if (media.checked) {
            value += 2 / 3;
        } else if (alta.checked) {
            value += 3 / 3;
        }
        return value;
    }


}

var encuesta = new Encuesta();