"use strict";
class Caneta {
    // modelo: string = "";
    // cor: string = "";
    // ponta: number = 0;
    // carga: number = 0;
    // tampada: boolean = false;
    //  constructor(modelo: string) {
    //      this.modelo = modelo;
    //      this.cor = "Azul";
    //      this.ponta = 0.5;
    //      this.carga = 50;
    //      this.tampada = true;
    //  }
    constructor(modelo, cor, ponta, carga, tampada) {
        this.modelo = modelo;
        this.cor = cor;
        this.ponta = ponta;
        this.carga = carga;
        this.tampada = tampada;
    }
}
let bic;
bic = new Caneta("Big cristal", "Azul", 0.5, 80, false);
//big.modelo = 'Jon Stark';
//big.cor = 'Azul';
console.log("person -->", bic);
//     }
// }
