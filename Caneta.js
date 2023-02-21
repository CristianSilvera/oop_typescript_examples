"use strict";
class Caneta {
    constructor(modelo) {
        this.modelo = "";
        this.cor = "";
        this.ponta = 0;
        this.carga = 0;
        this.tampada = false;
        this.modelo = modelo;
        this.cor = "Azul";
        this.ponta = 0.5;
        this.carga = 50;
        this.tampada = true;
    }
}
let big;
big = new Caneta("Big slim");
//big.modelo = 'Jon Stark';
//big.cor = 'Azul';
console.log("person -->", big);
//     }
// }
