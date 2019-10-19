import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReservacionService } from '../shared/model/assignment/reservacion.service'

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  // reservacion: Reservaciones[];
  formulararioReservacion: FormGroup;
  // editReservacion: Reservaciones
  constructor(private fb: FormBuilder,
    // private reservacionService: ReservacionService,
    private asignacionReservacion: ReservacionService,
    private router: Router) { }

  ngOnInit() {
    this.formularioReservacion();
  }

  formularioReservacion(){
    this.formulararioReservacion = this.fb.group({
      nombres: [""],
      apellidos: [""],
      cantidad_ninios: [null, Validators.required],
      cantidad_adultos: [null, Validators.required],
      fecha_in: ["", Validators.required],
      fecha_out: ["", Validators.required],
      destino: [0, Validators.required],
      cantidad_cuartos: [null, Validators.required],
      estatus: [0, Validators.required],
      detalle_pago_id: [""]
    });
  }

  onSubmit(){
    this.asignacionReservacion.documentoAsignacion = this.formulararioReservacion.value;
    this.router.navigate(['/reservacion']);
    console.log(this.asignacionReservacion.documentoAsignacion);
  }

  add(task_name: string): void {
    // this.editReservacion = undefined

    // const newTask: Task = { task_name } as Task
    // this.reservacionService.addTask(newTask).subscribe(task => this.tasks.push(task))
  }


}
