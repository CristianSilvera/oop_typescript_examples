//nome, energia, vida, ataque, defesa

//classe
class Personagem {

//Mejorar el codigo
    // nome: string = "";
    // energia: number = 0;
    // vida: number = 0;
    // ataque: number = 0; 
    // defesa: number = 0; 


    // constructor(nome: string){
    //     this.nome = nome;
    //     this.energia = 50;
    //     this.ataque = 50;
    // }

    constructor(
        public nome: string,
        public energia: number,
        public vida: number,
        public ataque: number,
        public defesa: number
    ) 
    {}

}

let sansa: Personagem;
sansa = new Personagem ('Sansa Stark', 100, 40, 20, 20);
//sansa.nome = 'Jon Stark';
//sansa.ataque = 75;
console.log("person -->", sansa);


//atributos

//metodos

