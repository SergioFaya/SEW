
/*
"no strict"
class MP3Player{

    selectFile(){

    }

}*/

class Cypher {
    constructor() {
        console.log("cypher constructor");
        this.binary = new BinaryCypher();
        //this.caesar = new CaesarCypher();
        //this.ascii = new AsciiCypher();
        
    }

    cypher() {
        console.log("cypher metodo");
        this.binary.cypher();
        //this.caesar.cypher;
        //this.ascii.cypher;
    }
}

class BinaryCypher {

    constructor() {
        console.log("binarycypher constructor");
        
    }
    cypher() {
        console.log("binarycypher metodo");
        document.getElementById("output").value = "";
        var i = 0;
        while(i < document.getElementById("input").value.length){
            console.log("loop");
            document.getElementById("output").value += 
            document.getElementById("input")[i].charCodeAt(0).toString(2) + " ";
            i++;
        }
        console.log("Output value: "+document.getElementById("output").value);
    }
}
var cypher = new Cypher();

function convert() {
    var output = document.getElementById("output");
    var input = document.getElementById("input").value;
    output.value = "";
    for (var i = 0; i < input.length; i++) {
        output.value += input[i].charCodeAt(0).toString(2) + " ";
    }
  }