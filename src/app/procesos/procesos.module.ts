import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcesosRoutingModule } from './procesos-routing.module';
import { TablaProcesoComponent } from './components/tabla-proceso/tabla-proceso.component';
import { NuevoProcesoComponent } from './pages/nuevo-proceso/nuevo-proceso.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NuevoProcesoComponent,
    TablaProcesoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProcesosRoutingModule
  ]
  
})
export class ProcesosModule { }
