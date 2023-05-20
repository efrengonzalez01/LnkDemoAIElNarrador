import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabla-proceso',
  templateUrl: './tabla-proceso.component.html'
})
export class TablaProcesoComponent {
  @Input() public childMessage: string='';

  constructor(){}
  

}
