import { Component, OnInit } from '@angular/core';
import { GridApi } from 'ag-grid-community';
import { ColDefMachine } from 'src/app/constant';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  rowData = [];
  gridOptions = {
    suppressRowDeselection: true,
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
  colDefs = ColDefMachine;
  gridApi: GridApi | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  onGridReady(params: any) {
    this.gridApi = params.api;
  }

}
