export class Lib {
    id: number = 0;


    fecha: string = "";
    cantidad: string = "";
    tipopago: string = "";
    totalventa: string = "";
    descuento: string = "";
    totalneto: string = "";
    confirmado: string = "";
    anulado: string = "";

    cliente: number;
    paquete: number;
    empleado: number;
    constructor() {
        this.fecha = "";
        this.cantidad = "";
        this.tipopago = "";
        this.totalventa = "";
        this.descuento = "";
        this.totalneto = "";
        this.confirmado = "";
        this.anulado = "";
      
 
        this.cliente;
        this.paquete;
        this.empleado;
    }
}
