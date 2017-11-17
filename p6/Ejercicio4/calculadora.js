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

    setValueOnDisplay(str) {
        document.getElementById("text").value = str;
    }

    clearField() {
        this.text = "";
        this.setValueOnDisplay("0");
        this.estado();
    }

    append(a) {
        if (document.getElementById("text").value == "0") {
            this.setValueOnDisplay(a);
        } else {
            this.setValueOnDisplay(this.text + a);
        }
        this.text = document.getElementById("text").value;
        this.estado();
    }

    mrc() {
        if (this.memoria == "") {
            this.setValueOnDisplay("0");
        } else {
            this.setValueOnDisplay(this.memoria);
            this.text = this.memoria;
            this.estado();
        }
    }

    mMinus() {
        if (this.text != "") {
            if (this.text != "SYNTAX ERROR") {
                var str = this.memoria + "-" + this.document.getElementById("text").value;
                try {
                    this.text = eval(str);
                    this.setValueOnDisplay(this.text);
                    this.memoria = this.text;
                } catch (err) {
                    this.text = "SYNTAX ERROR";
                    this.setValueOnDisplay(this.text);
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
                    this.setValueOnDisplay(this.text);
                    this.memoria = this.text;
                } catch (err) {
                    this.text = "SYNTAX ERROR";
                    this.setValueOnDisplay(this.text);
                }
                this.estado();
            }
        }
    }
    equals() {
        try {
            this.setValueOnDisplay(eval(this.text));
            this.text = document.getElementById("text").value;
        } catch (err) {
            this.text = "SYNTAX ERROR";
            this.setValueOnDisplay(this.text);
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
        this.clearField();
    }

    smashMemory(mem) {
        this.memoria = mem;
        this.text = this.memoria;
        this.setValueOnDisplay(this.text);
    }
    invert() {

        if (eval(this.text) > 0) {
            this.text = "-" + this.text;
        } else if (eval(this.text) < 0) {
            this.text = this.text.substring(1);
        }
        this.setValueOnDisplay(this.text);
        this.estado();
    }

    returnKey() {
        this.text = this.text.substring(0, this.text.length - 1);
        this.setValueOnDisplay(this.text);
        if (this.text == "") {
            this.setValueOnDisplay("0");
        }
    }

    /*
    recursiveSplit(operation){
        var splitA;
        var splitB;
        console.log(operation);
        if(operation.indexOf("^") > -1){ 
            splitA = this.recursiveSplit(operation.substring(0,operation.indexOf("^")));
            splitB = this.recursiveSplit(operation.substring(operation.indexOf("^")+1,operation.length));
            return this.pow(eval(splitA),eval(splitB));
        }
        if(operation.indexOf("*") > -1){ 
            splitA = this.recursiveSplit(operation.substring(0,operation.indexOf("*")));
            splitB = this.recursiveSplit(operation.substring(operation.indexOf("*")+1,operation.length));
            return eval(splitA)+"*"+eval(splitB);
        }
        if(operation.indexOf("/") > -1){ 
            splitA = this.recursiveSplit(operation.substring(0,operation.indexOf("/")));
            splitB = this.recursiveSplit(operation.substring(operation.indexOf("/")+1,operation.length));
            return eval(splitA)+"/"+eval(splitB);
        }
        if(operation.indexOf("+") > -1){ 
            splitA = this.recursiveSplit(operation.substring(0,operation.indexOf("+")));
            splitB = this.recursiveSplit(operation.substring(operation.indexOf("+")+1,operation.length));
            return eval(splitA)+"+"+eval(splitB);
        }
        if(operation.indexOf("-") > -1){ 
            splitA = this.recursiveSplit(operation.substring(0,operation.indexOf("-")));
            splitB = this.recursiveSplit(operation.substring(operation.indexOf("-")+1,operation.length));
            return eval(splitA)+"-"+eval(splitB);
        }
        console.log("Izquierda:" +splitA);
        console.log(operation);

        return eval(operation);
    }
    
    
    equals(){
        this.value = this.recursiveSplit(this.text);
        this.text = this.value;
        document.getElementById("text").value = this.text;
    }
    */

    twoPow() {
        this.text = Math.pow(this.text,2);
        this.setValueOnDisplay(this.text);
    }

    threePow() {
        this.text = Math.pow(this.text,3);
        this.setValueOnDisplay(this.text);
    }

    tenPow(){
        this.text = Math.pow(10,this.text);
        this.setValueOnDisplay(this.text);
    }
    sin() {
        this.text = Math.sin(this.text);
        this.setValueOnDisplay(this.text);
    }

    cos() {
        this.text = Math.cos(this.text);
        this.setValueOnDisplay(this.text);
    }

    tan() {
        this.text = Math.tan(this.text);
        this.setValueOnDisplay(this.text);
    }

    sqrt() {
        this.text = Math.sqrt(this.text);
        this.setValueOnDisplay(this.text);
    }

    exp() {
        this.text = Math.exp(this.text);
        this.setValueOnDisplay(this.text);
    }

    log() {
        this.text = Math.log(this.text);
        this.setValueOnDisplay(this.text);
    }

    pi(){
        this.append(Math.PI);
    }

    e(){
        this.append(Math.E);
    }
}
var calculadora = new CalculadoraCientifica