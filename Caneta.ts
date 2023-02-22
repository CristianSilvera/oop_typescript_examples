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

     constructor(
        public modelo: string,
        public cor: string,
        public ponta: number,
        public carga: number, 
        public tampada: boolean
        ) 
        {
        
    }
}

        let bic: Caneta;
        bic = new Caneta ("Big cristal", "Azul", 0.5, 80, false);
        //big.modelo = 'Jon Stark';
        //big.cor = 'Azul';
        console.log("person -->", bic);
//     }
// }