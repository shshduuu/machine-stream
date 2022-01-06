import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ColDefEvent, gridOptions } from 'src/app/constant';

@Component({
  selector: 'app-details-dialog',
  templateUrl: './details-dialog.component.html',
  styleUrls: ['./details-dialog.component.css']
})
export class DetailsDialogComponent {

  rowData = [];
  gridOptions = gridOptions;
  colDefs = ColDefEvent;
  gridApi: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.rowData = data.rows;
  }

  onGridReady(params: any): void {
    this.gridApi = params.api;
    const sortModel = [
        {colId: 'timestamp', sort: 'desc'}
    ];
    this.gridApi.setSortModel(sortModel);
  }

}
