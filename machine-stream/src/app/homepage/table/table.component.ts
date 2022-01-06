import { Component, OnInit } from '@angular/core';
import { GridApi } from 'ag-grid-community';
import { ColDefMachine, gridOptions } from 'src/app/constant';
import { MachineDataApiService } from 'src/app/machine-data-api.service';
import { DetailsRendererComponent } from './details-renderer/details-renderer.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  rowData = [];
  gridOptions = gridOptions;
  colDefs = ColDefMachine;
  gridApi: GridApi | undefined;
  frameworkComponents: any;

  constructor(private machineDataService: MachineDataApiService) {
    this.frameworkComponents = {
      detailsRenderer: DetailsRendererComponent,
    };
  }

  async ngOnInit(): Promise<void> {
   this.rowData = await this.machineDataService.getAllMachines().toPromise();   
  }

  onGridReady(params: any) {
    this.gridApi = params.api;
  }
}
