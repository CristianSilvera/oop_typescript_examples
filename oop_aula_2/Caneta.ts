class Caneta {
    modelo: string = "";
    cor: string = "";
    ponta: number = 0;
    carga: number = 0;
    tampada: boolean = false;

     constructor(modelo: string) {
         this.modelo = modelo;
         this.cor = "Azul";
         this.ponta = 0.5;
         this.carga = 50;
         this.tampada = true;
     }
}

        let big: Caneta;
        big = new Caneta ("Big slim");
        //big.modelo = 'Jon Stark';
        //big.cor = 'Azul';
        console.log("person -->", big);
//     }
// }