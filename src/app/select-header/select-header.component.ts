import { Component, OnDestroy } from '@angular/core';
import { IHeaderAngularComp } from 'ag-grid-angular';
import { GridApi, IHeaderParams } from 'ag-grid-community';

export interface CustomParams extends IHeaderParams {
  isAllSelected: boolean;
}

@Component({
  selector: 'app-select-header',
  templateUrl: './select-header.component.html',
  styleUrls: ['./select-header.component.scss']
})
export class SelectHeaderComponent implements IHeaderAngularComp, OnDestroy {
  params: CustomParams;
  gridApi: GridApi;
  checkboxValue = false;

  constructor() { }

  agInit(params: CustomParams): void {
    this.params = params;
    this.checkboxValue = this.params.isAllSelected;
    this.gridApi = params.api;
  }

  refresh(params: CustomParams): boolean {
    this.params = params;
    this.checkboxValue = this.params.isAllSelected;
    return true;
  }

  onCheck(): void {
    this.checkboxValue = !this.checkboxValue;
    this.checkboxValue ? this.gridApi.selectAll() : this.gridApi.deselectAll();
  }

  ngOnDestroy(): void {
    this.gridApi.deselectAll();
  }
}
