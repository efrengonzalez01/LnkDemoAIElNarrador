import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevoProcesoComponent } from './pages/nuevo-proceso/nuevo-proceso.component';

const routes: Routes = [
  {
    path:'',
    children: [
      {path:'nuevo', component: NuevoProcesoComponent},
      {path:'**', redirectTo: 'nuevo'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcesosRoutingModule { }
