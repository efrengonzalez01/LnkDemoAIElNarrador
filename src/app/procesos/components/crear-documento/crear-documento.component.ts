import { Component, Input } from '@angular/core';
import { ActividadModel } from '../../modelo.objecto/actividad.model';
import * as pdfMake  from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { TDocumentDefinitions } from 'pdfmake/interfaces';

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-crear-documento',
  templateUrl: './crear-documento.component.html'
})
export class CrearDocumentoComponent {

  @Input() tablaProceso: ActividadModel[] =[];
  procesoArreglo : any [][]=[];
 
  crearDocumento(){
    this.convertirTablaAArreglo();

   const table = [['N°', 'Actividad', 'Rol','Descripción']];

   for (let i = 0; i < this.procesoArreglo.length; i++) {
    table.push(this.procesoArreglo[i]);
   }
  
    const documentDefinition : TDocumentDefinitions= {
      content: [
        {
          text: 'Procedimiento: Ventas de productos',
          style: 'header',
        },
        {
          table: {
            headerRows: 1,
            widths: ['*', '*', '*','*'], // Ajusta los anchos de columna según sea necesario
            body: table,
          },
        },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10],
        },
      },
    };
  
    const pdfDocGenerator = pdfMake.createPdf(documentDefinition);
    pdfDocGenerator.download('procedimiento.pdf'); 
  }

  convertirTablaAArreglo(){
    if (this.tablaProceso.length == 0) return;
    
    const valuesArray = this.tablaProceso.map(obj => Object.values(obj)).flat();

    for (let i = 0; i < valuesArray.length; i += 4) {
      const subArray = valuesArray.slice(i, i + 4);
      this.procesoArreglo.push(subArray);
    }

 
  }
}
