import { Component, OnDestroy, OnInit } from '@angular/core';
import { GridApi } from 'ag-grid-community';
import { ColDefMachine, gridOptions } from 'src/app/constant';
import { MachineDataApiService } from 'src/app/machine-data-api.service';
import { MachineData, UpdatedData } from 'src/app/types';
import { WebsocketService } from 'src/app/websocket.service';
import { DetailsRendererComponent } from './details-renderer/details-renderer.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnDestroy {


  rowData: MachineData[] = [];
  gridOptions = gridOptions;
  colDefs = ColDefMachine;
  gridApi: GridApi | undefined;
  frameworkComponents: any;
  websocket: WebSocket | undefined;
  constructor(
    private machineDataService: MachineDataApiService,
    private websocketService: WebsocketService
    ) {
    this.frameworkComponents = {
      detailsRenderer: DetailsRendererComponent,
    };
  }

  async ngOnInit(): Promise<void> {
   this.rowData = await this.machineDataService.getAllMachines().toPromise();
   this.websocket = this.websocketService.createWebSocket();
   this.websocket.onmessage = (event) => {
    const message = JSON.parse(event.data)
    this.findUpdatedRow(this.rowData, message.payload);
   }
  }

  ngOnDestroy(): void {
    this.closeWebSocket();
  }

  onGridReady(params: any) {
    this.gridApi = params.api;
  }

  private closeWebSocket() {
    this.websocket?.close();
  }
 
  private findUpdatedRow(rowData: MachineData[], updateMsg: UpdatedData) {
    const rowId = rowData.findIndex(row => row.id === updateMsg.machine_id);
    if (rowId === -1) return;
    const rowNode = this.gridApi?.getDisplayedRowAtIndex(rowId);
    rowNode?.setDataValue('status', updateMsg.status)
  }
}
