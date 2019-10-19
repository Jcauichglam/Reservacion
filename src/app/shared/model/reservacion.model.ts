export class ReservacionModel {
  id:number;
  nombres: string;
  apellidos: string;
  cantidad_ninios: number;
  cantidad_adultos: number;
  fecha_in: Date;
  fecha_out:Date;
  destino:string;
  cantidad_cuartos:number;
  estatus: number;
  detalle_pago_id: number;
}
