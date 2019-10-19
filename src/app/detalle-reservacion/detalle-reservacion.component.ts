import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReservacionService } from '../shared/model/assignment/reservacion.service';
import { TarjetaService } from '../shared/service/tarjeta.service';

@Component({
  selector: 'app-detalle-reservacion',
  templateUrl: './detalle-reservacion.component.html',
  styleUrls: ['./detalle-reservacion.component.css']
})
export class DetalleReservacionComponent implements OnInit {

  formulararioReservacion: FormGroup;
  formulararioTarjeta: FormGroup;
  constructor(private fb: FormBuilder,
    private asignacionReservacion: ReservacionService,
    private tarjetaService: TarjetaService
    // private reservacionService: ReservaciosnService,
    // private tarjetaService: TarjetaService
    ) { }

    tarjeta: undefined;
  ngOnInit() {
    this.formularioReservacion();
    this.formulariotarjeta();
    this.formulararioReservacion.patchValue(this.asignacionReservacion.documentoAsignacion);
    console.log(this.formulararioReservacion.value);
  }

  formularioReservacion(){
    this.formulararioReservacion = this.fb.group({
      nombres: [""],
      apellidos: [""],
      cantidad_ninios: ["", Validators.required],
      cantidad_adultos: ["", Validators.required],
      fecha_in: ["", Validators.required],
      fecha_out: ["", Validators.required],
      destino: ["", Validators.required],
      cantidad_cuartos: ["", Validators.required],
      estatus: [0, Validators.required],
      detalle_pago_id: [""]
    });
  }

  formulariotarjeta(){
    this.formulararioTarjeta = this.fb.group({
      id: [""],
      titular:[""],
      numero: [""],
      cv: [""],
      fecha: [""]
    });
  }

  onSubmit(){
    this.tarjetaService.addTarjeta(this.formulararioTarjeta.value).subscribe(datos => {
      console.log(datos);
    })
    // this.tarjetaService.addTarjeta(this.formulararioTarjeta.value).subscribe(tarjeta => {
    //   console.log(tarjeta);
    // });
  }
}
