import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcesosRoutingModule } from './procesos-routing.module';
import { TablaProcesoComponent } from './components/tabla-proceso/tabla-proceso.component';
import { NuevoProcesoComponent } from './pages/nuevo-proceso/nuevo-proceso.component';
import { FormsModule } from '@angular/forms';
import { FormatoTablas } from './negocio/formatotabla.service';
import { CrearDocumentoComponent } from './components/crear-documento/crear-documento.component';


@NgModule({
  declarations: [
    NuevoProcesoComponent,
    TablaProcesoComponent,
    CrearDocumentoComponent,
   
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProcesosRoutingModule, 
  ], 
  providers: [ 
    FormatoTablas
  ],
  
})
export class ProcesosModule { }
