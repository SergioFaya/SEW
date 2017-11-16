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

    getValueOnDisplay() {
        return document.getElementById("text").value;
    }

    clearField() {
        this.text = "";
        this.setValueOnDisplay("0");
        this.estado();
    }

    append(a) {
        if (this.getValueOnDisplay() == "0") {
            this.setValueOnDisplay(a);
        } else {
            this.setValueOnDisplay(this.text + a);
        }
        this.text = getValueOnDisplay();
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
                var str = this.memoria + "-" + this.getValueOnDisplay();
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
                var str = this.memoria + "+" + this.getValueOnDisplay();
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
            this.text = this.getValueOnDisplay();
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

    setValueOnDisplay(str) {
        document.getElementById("text").value = str;
    }

    getValueOnDisplay() {
        return document.getElementById("text").value;
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

    pow(x, y) {
        return Math.pow(x, y);
    }

    sqrt(x) {
        return Math.sqrt(x);
    }

    sin(x) {
        return Math.sin(x);
    }

    cos(x) {
        return Math.cos(x);
    }
    tan(x) {
        return Math.tan(x);
    }
}

var calculadora = new CalculadoraCientifica();
<<<<<<< HEAD
calculadora.append("9");
=======
calculadora.text = "3*5+10";
calculadora.equals();
>>>>>>> fa7bf52a187970807591020eea93654cb777ce89
