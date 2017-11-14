"no strict"
import { Calculadora } from "calculadora.js"
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