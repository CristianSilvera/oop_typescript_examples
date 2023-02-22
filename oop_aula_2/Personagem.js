"use strict";
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
    constructor(nome, energia, vida, ataque, defesa) {
        this.nome = nome;
        this.energia = energia;
        this.vida = vida;
        this.ataque = ataque;
        this.defesa = defesa;
    }
}
let sansa;
sansa = new Personagem('Sansa Stark', 100, 40, 20, 20);
//sansa.nome = 'Jon Stark';
//sansa.ataque = 75;
console.log("person -->", sansa);
//atributos
//metodos
