import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ColDefEvent } from 'src/app/constant';

@Component({
  selector: 'app-details-dialog',
  templateUrl: './details-dialog.component.html',
  styleUrls: ['./details-dialog.component.css']
})
export class DetailsDialogComponent {

  rowData = [];
  gridOptions = {
    animateRows: true,
    defaultColDef: {
      minWidth: 100,
      flex: 1,
      sortable: true,
      filter: true,
      floatingFilter: true,
      resizable: true,
    },
  };
  colDefs = ColDefEvent;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.rowData = data.rows;
  }

}
