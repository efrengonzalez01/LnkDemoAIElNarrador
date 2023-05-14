import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'proceso',
   loadChildren: () => import('./procesos/procesos.module').then(m => m.ProcesosModule)},
  {
    path:'**',
    redirectTo:'proceso'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
