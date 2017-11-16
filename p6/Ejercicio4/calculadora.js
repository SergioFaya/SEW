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

    smashMemory(mem) {
        this.memoria = mem;
        this.text = this.memoria;
        document.getElementById("text").value = this.text;
    }
    invert() {
        
        if (eval(this.text) >0 ) {
            this.text = "-" + this.text;
        }else if (eval(this.text) < 0) {
            this.text = this.text.substring(1);
        }
        document.getElementById("text").value = this.text;
        this.estado();
    }

    return(){
        this.text = this.text.substring(0,this.text.length-1);
        document.getElementById("text").value = this.text;
        if(this.text == ""){
            document.getElementById("text").value = "0";
        }
    }

    recursiveSplit(operation){
        this.splitA;
        this.splitB;
        console.log(operation);
        if(operation.indexOf("^") > -1){ 
            this.splitA = this.recursiveSplit(operation.substring(0,operation.indexOf("^")));
            this.splitB = this.recursiveSplit(operation.substring(operation.indexOf("^")+1,operation.length));
            return this.pow(this.splitA,this.splitB);
        }
        if(operation.indexOf("*") > -1){ 
            this.splitA = this.recursiveSplit(operation.substring(0,operation.indexOf("*")));
            this.splitB = this.recursiveSplit(operation.substring(operation.indexOf("*")+1,operation.length));
            return this.splitA+"*"+this.splitB
        }
        if(operation.indexOf("/") > -1){ 
            this.splitA = this.recursiveSplit(operation.substring(0,operation.indexOf("/")));
            this.splitB = this.recursiveSplit(operation.substring(operation.indexOf("/")+1,operation.length));
            return this.splitA+"/"+this.splitB;
        }
        if(operation.indexOf("+") > -1){ 
            this.splitA = this.recursiveSplit(operation.substring(0,operation.indexOf("+")));
            this.splitB = this.recursiveSplit(operation.substring(operation.indexOf("+")+1,operation.length));
            return this.splitA+"+"+this.splitB;
        }
        if(operation.indexOf("-") > -1){ 
            this.splitA = this.recursiveSplit(operation.substring(0,operation.indexOf("-")));
            this.splitB = this.recursiveSplit(operation.substring(operation.indexOf("-")+1,operation.length));
            return this.splitA+"-"+this.splitB;
        }
        console.log("Izquierda:" +this.splitA);
        console.log(operation);

        return eval(operation);
    }
    
    equals(){
        this.value = this.recursiveSplit(this.text);
        this.text = this.value;
        document.getElementById("text").value = this.text;
    }

    

    pow(x,y){
       return Math.pow(x,y);
    }

    sqrt(x){
        return Math.sqrt(x);
    }

    sin(x){
        return Math.sin(x);
    }

    cos(x){
        return Math.cos(x);
    }
    tan(x){
        return Math.tan(x);
    }
}

var calculadora = new CalculadoraCientifica();
calculadora.text = "3*5+10";
calculadora.equals();