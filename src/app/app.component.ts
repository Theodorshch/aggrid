import { Component, OnInit } from '@angular/core';
import { ColDef, GetContextMenuItemsParams, GridApi, MenuItemDef } from 'ag-grid-community';
import { Observable } from 'rxjs';

import { DataService } from './services/data.service';
import { RowData, Title } from './shared/data';
import { VideoPreviewComponent } from './video-preview/video-preview.component';
import { VideoTitleComponent } from './video-title/video-title.component';
import { SelectHeaderComponent } from './select-header/select-header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  rowSelection = 'multiple';
  gridApi: GridApi;
  selectedRowsLength: number;
  rowsLength: number;

  defaultColDef = {
    suppressMenu: true
  };

  columnDefs: ColDef[] = [
    { headerName: '', field: '', hide: true, checkboxSelection: true, width: 50,
      headerComponentFramework: SelectHeaderComponent, headerComponentParams: {isAllSelected: false} },
    { headerName: '', field: 'thumbnail', width: 90, cellRendererFramework: VideoPreviewComponent },
    { headerName: 'Published on', field: 'publishedAt', flex: 1, sortable: true, },
    { headerName: 'Video Title', field: 'title', flex: 1, sortable: true, comparator: this.titleComparator,
      cellRendererFramework: VideoTitleComponent},
    { headerName: 'Description', field: 'description', flex: 1, sortable: true }
  ];

  statusBar = {
    statusPanels: [
      { statusPanel: 'agTotalRowCountComponent', align: 'center' },
      { statusPanel: 'agSelectedRowCountComponent', align: 'center' },
    ],
  };

  rowData$: Observable<RowData[]>;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.rowData$ = this.dataService.getVideos();
  }

  titleComparator(title1: Title, title2: Title): number {
    if (title1.title < title2.title) {
      return -1;
    }
    if (title1.title > title2.title) {
      return 1;
    }
    return 0;
  }

  selectionMode(): void {
    const newColDefs = [...this.columnDefs];
    newColDefs[0].hide = !newColDefs[0].hide;
    this.gridApi.setColumnDefs(newColDefs);
  }

  onSelectionChanged(): void {
    this.selectedRowsLength = this.gridApi.getSelectedNodes().length;
    this.rowsLength = this.gridApi.getDisplayedRowCount();
    const newColDefs = [...this.columnDefs];
    newColDefs[0].headerComponentParams = {isAllSelected: this.selectedRowsLength === this.rowsLength};
    this.gridApi.setColumnDefs(newColDefs);
  }

  onGridReady(params): void {
    this.gridApi = params.api;
  }

  setInitRowsAmount(): void {
    this.selectedRowsLength = this.gridApi.getSelectedNodes().length;
    this.rowsLength = this.gridApi.getDisplayedRowCount();
  }

  getContextMenuItems(params: GetContextMenuItemsParams): MenuItemDef[] {
    if (params.column.getColId() === 'title') {
      return [
        {
          name: 'Open in new tab',
          action: () => {
            const url = `https://www.youtube.com/watch?v=${params.value.videoId}`;
            window.open(url);
          },
        }
      ];
    } else {
      return null;
    }
  }
}
