import { Component, Input } from '@angular/core';
import { ActividadModel } from '../../modelo.objecto/actividad.model';

@Component({
  selector: 'app-tabla-proceso',
  templateUrl: './tabla-proceso.component.html'
})
export class TablaProcesoComponent {
  @Input() public childMessage: ActividadModel[]=[];

  constructor(){}
  

}
