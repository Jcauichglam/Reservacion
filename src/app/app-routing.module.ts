import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { DetalleReservacionComponent } from './detalle-reservacion/detalle-reservacion.component';
import { CompleteComponent } from './complete/complete.component';
import { FindReservationComponent } from './find-reservation/find-reservation.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: BannerComponent
  },
  {
    path: 'reservacion', component: DetalleReservacionComponent
  },
  {
    path: 'completa', component: CompleteComponent
  },
  {
    path: 'find_reservation', component: FindReservationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
