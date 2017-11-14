"no strict"
class Calculadora {
    constructor() {
        this.memoria = ""
        ;
        this.text = "";
    }

    estado(){
        console.log("Memoria:  "+this.memoria);
        console.log("Texto:  "+this.text);

    }

    clearField() {
        this.memoria = "";
        this.text = "";
        document.getElementById("text").value = this.text;
        this.estado();
    }

    append(a){
        if(document.getElementById("text").value == ""){
            document.getElementById("text").value = a;
        }else{
            document.getElementById("text").value = this.text + a;
        }
        this.text = document.getElementById("text").value;
        this.estado();
    }

    mrc() {
        document.getElementById("text").value = this.memoria;
        this.text = this.memoria;
        this.estado();
    }

    mMinus() {
        var str = this.memoria +"-"+document.getElementById("text").value;
        this.text = eval(str);
        document.getElementById("text").value = this.text;
        this.memoria = this.text;
        this.estado();
    }

    mPlus() {
        var str = this.memoria +"+"+document.getElementById("text").value;
        this.text = eval(str);
        document.getElementById("text").value = this.text;
        this.memoria = this.text;
        this.estado();
    }
    equals() {
        eval(this.text);
        document.getElementById("text").value = eval(this.text);
        this.text = document.getElementById("text").value;
        this.estado();
    }
}
var calculadora = new Calculadora();