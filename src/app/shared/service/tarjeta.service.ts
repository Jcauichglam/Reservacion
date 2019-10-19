import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TarjetaModel } from '../model/tarjeta.model';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {
  urlApi = environment.urlApi;

  constructor(private http: HttpClient) { }

  addTarjeta(task: TarjetaModel): Observable<any> {
    const url = `${this.urlApi}pago`
    return this.http.post<any>(url,task).pipe(

    );
  }
}
