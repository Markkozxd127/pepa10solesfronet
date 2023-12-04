  export class Libr {

    fecha: string ;
    cantidad: string ;
    tipopago: string ;
    totalventa: string ;
    descuento: string ;
    totalneto: string ;


    confirmado: string ;
    anulado: string ;


    cliente: number ; 
    paquete: number ; 
    empleado: number;
      
      constructor (){ 

        this.fecha="";
        this.cantidad="";
        this.tipopago="";
        this.totalventa="";
        this.descuento="";
        this.totalneto="";
        this.confirmado="";
        this.anulado="";

        this.cliente=0;
        this.paquete=0;
        this.empleado=0;
      }
    }
    