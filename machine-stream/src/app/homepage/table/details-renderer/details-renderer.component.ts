import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { MachineDataApiService } from 'src/app/machine-data-api.service';
import { DetailsDialogComponent } from '../details-dialog/details-dialog.component';

@Component({
  selector: 'app-details-renderer',
  templateUrl: './details-renderer.component.html',
  styleUrls: ['./details-renderer.component.scss']
})
export class DetailsRendererComponent implements ICellRendererAngularComp {
  params: any;

  constructor(
    public dialog: MatDialog,
    private machineDataService: MachineDataApiService
  ) {}

  agInit(params: any): void {
    this.params = params;
  }

  refresh(params?: any): boolean {
    return true;
  }

  async onClick() {
    const machineData = await this.machineDataService.getMachine(this.params.data.id).toPromise();
    this.openDialog(machineData);
  }

  openDialog(machineData: any): void {
    this.dialog.open(DetailsDialogComponent, {
      data: {
        rows: machineData.events
      },
      width: '50vw',
      height: '30hw',
    });
  }
}