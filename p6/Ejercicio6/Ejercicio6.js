"no strict"
class Tuple {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    getA() {
        return this.a;
    }
    getB() {
        return this.b;
    }
}

class Organizer {

    constructor() {
        this.provisionalFighters = [];
        this.fighters = [];
        this.pairs = [];
        this.round = 1;
        this.lenght = 0;
        document.getElementById("btnOrganize").disabled = true;
        document.getElementById("btnAddWinner").disabled = false;
    }

    addFighter() {
        var txtFighter = document.getElementById("txtFighter");
        var txtProvisional = document.getElementById("txtProvisionalFighters");
        if (txtFighter.value.trim() == "") {
            txtFighter.value = "Introduce un nombre de luchador";
        } else if (txtFighter.value.trim() == "El luchador ya existe" || txtFighter.value.trim() == "Introduce un nombre de luchador") {
            txtFighter.value = ""
        } else {
            if (!this.provisionalFighters.includes(txtFighter.value)) {
                this.provisionalFighters.push(txtFighter.value);
                txtProvisional.value += "\n" + txtFighter.value;
                this.lenght++;
            } else {
                txtFighter.value = "El luchador ya existe";
            }
        }
    }

    confirmFighters() {
        var l = this.provisionalFighters.length;

        if ((l && (l & (l - 1)) === 0) && l > 1) {//power of 2 
            this.fighters = this.provisionalFighters;
            document.getElementById("btnAddFighter").disabled = true;
            document.getElementById("btnConfirm").disabled = true;
            document.getElementById("btnOrganize").disabled = false;
            document.getElementById("btnAddWinner").disabled = false;
            
        } else {

            var txtProvisional = document.getElementById("txtProvisionalFighters");
            txtProvisional.value = "El numero de luchadores debe de ser potencia de 2";
        }

    }

    selectRandomly() {
        var posA = Math.floor(Math.random() * this.fighters.length);
        var a = this.fighters[posA];
        this.fighters.splice(posA, 1);
        var posB = Math.floor(Math.random() * this.fighters.length);
        var b = this.fighters[posB];
        this.fighters.splice(posB, 1);
        return new Tuple(a, b);
    }

    organizeFighters() {
        this.pairs = [];
        var mod = this.lenght % 2;
        if (mod == 0) {
            let i = 0;
            while (i < this.lenght / 2) {
                var tuple = this.selectRandomly();
                this.pairs.push(tuple);
                i++;
            }
            this.fighters = [];
            this.lenght = 0;
            this.list();
            document.getElementById("btnOrganize").disabled = true;
            document.getElementById("btnAddWinner").disabled = false;
        } else {
            var result = document.getElementById("txtResultados");
            result.value = "DEBE HABER UN NUMERO PAR DE LUCHADORES"
        }
    }

    list() {
        var result = document.getElementById("txtResultados");
        if ("DEBE HABER UN NUMERO PAR DE LUCHADORES" == result.value) {
            result.value = "";
        }
        result.value += "Ronda" + this.round + "\n\n";
        this.pairs.forEach(element => {
            console.log("foreach");
            result.value += element.getA() + "-vs-" + element.getB() + "\n";
        });
        this.round++;
    }

    increaseLenght() {
        this.lenght++;
    }
    addWinner() {
        var winner = document.getElementById("txtWinner");
        var result = document.getElementById("txtResultados");
        if (this.pairs.length == 1) {
            result.value = "EL GANADOR DEL CAMPEONATO ES:" + winner.value;
            document.getElementById("btnOrganize").disabled = true;
        } else {
            this.pairs.forEach(element => {
                if (element.getA() == winner.value) {
                    this.fighters.push(element.getA());
                    this.increaseLenght();
                } else if (element.getB() == winner.value) {
                    this.fighters.push(element.getB());
                    this.increaseLenght();
                }
            });
        }
        if(this.fighters.length == this.pairs.length){
            document.getElementById("btnOrganize").disabled = false;
            document.getElementById("btnAddWinner").disabled = true;
        }
    }
}

