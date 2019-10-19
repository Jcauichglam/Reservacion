import { Injectable } from '@angular/core';
import { ReservacionModel } from '../reservacion.model';

@Injectable({
  providedIn: 'root'
})
export class ReservacionService {
  private _documentoAsignacion: ReservacionModel = new ReservacionModel();

  constructor() {
  }

  get documentoAsignacion(): ReservacionModel {
    return this._documentoAsignacion;
  }

  set documentoAsignacion(documentoRelacion: ReservacionModel) {
    // this.documentoAsignacion = documentoRelacion;
    Object.assign(this._documentoAsignacion, documentoRelacion);
  }

}
