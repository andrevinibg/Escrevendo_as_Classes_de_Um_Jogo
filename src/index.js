class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque; 

        
        let tipoPadrao = String(this.tipo).toLowerCase().trim();

        
        if (tipoPadrao === "") {
            tipoPadrao = "aventureiro";
        }

        switch (tipoPadrao) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "um ataque desconhecido";
        }

        console.log(`${this.nome}, o ${tipoPadrao} de ${this.idade} anos, atacou usando ${ataque}`);
    }
}

// --- INSTÂNCIAS ---
const heroi1 = new Heroi("Gandalf", 1500, " ");      
const heroi2 = new Heroi("Conan", 30, "GUERREIRO");  
const heroi3 = new Heroi("Lee", 25, "mONge");        
const heroi4 = new Heroi("Hanzo", 28, "Ninja");
const heroi5 = new Heroi("Dr. Estranho", 45, "Mago");


const herois = [heroi1, heroi2, heroi3, heroi4, heroi5];

console.log("--- INICIANDO A BATALHA ---\n");

for (let i = 0; i < herois.length; i++) {
    herois[i].atacar();
}