"no strict"
class Calculadora {
    constructor() {
        this.memoria = "";
        this.text = "";
    }
    //lista el estado del texto y de la memoria en la consola del navegador
    estado() {
        console.log("Memoria:  " + this.memoria);
        console.log("Texto:  " + this.text);
    }

    clearField() {
        this.text = "";
        document.getElementById("text").value = "0";
        this.estado();
    }

    append(a) {
        if (document.getElementById("text").value == "0") {
            document.getElementById("text").value = a;
        } else {
            document.getElementById("text").value = this.text + a;
        }
        this.text = document.getElementById("text").value;
        this.estado();
    }

    mrc() {
        if (this.memoria == "") {
            document.getElementById("text").value = "0";
        } else {
            document.getElementById("text").value = this.memoria;
            this.text = this.memoria;
            this.estado();
        }
    }

    mMinus() {
        if (this.text != "") {
            if (this.text != "SYNTAX ERROR") {
                var str = this.memoria + "-" + document.getElementById("text").value;
                try {
                    this.text = eval(str);
                    document.getElementById("text").value = this.text;
                    this.memoria = this.text;
                } catch (err) {
                    this.text = "SYNTAX ERROR";
                    document.getElementById("text").value = this.text;
                }
                this.estado();
            }
        }
    }

    mPlus() {
        if (this.text != "") {
            if (this.text != "SYNTAX ERROR") {
                var str = this.memoria + "+" + document.getElementById("text").value;
                try {
                    this.text = eval(str);
                    document.getElementById("text").value = this.text;
                    this.memoria = this.text;
                } catch (err) {
                    this.text = "SYNTAX ERROR";
                    document.getElementById("text").value = this.text;
                }
                this.estado();
            }
        }
    }
    equals() {
        try {
            document.getElementById("text").value = eval(this.text);
            this.text = document.getElementById("text").value;
        } catch (err) {
            this.text = "SYNTAX ERROR";
            document.getElementById("text").value = this.text;
        }
        this.estado();
    }
}

class CalculadoraCientifica extends Calculadora {
    constructor() {
        super();
    }

    clearAll() {
        this.memoria = "";
        this.text = "";
        document.getElementById("text").value = "0";
        this.estado();

    }
}

var calculadora = new CalculadoraCientifica();