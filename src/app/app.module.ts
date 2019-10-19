import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { BannerComponent } from './banner/banner.component';
import { DetalleReservacionComponent } from './detalle-reservacion/detalle-reservacion.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CompleteComponent } from './complete/complete.component';
import { FindReservationComponent } from './find-reservation/find-reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    BannerComponent,
    DetalleReservacionComponent,
    CompleteComponent,
    FindReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
