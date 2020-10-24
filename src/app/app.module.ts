import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VideoPreviewComponent } from './video-preview/video-preview.component';
import { VideoTitleComponent } from './video-title/video-title.component';
import { SelectHeaderComponent } from './select-header/select-header.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoPreviewComponent,
    VideoTitleComponent,
    SelectHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([
      VideoPreviewComponent,
      VideoTitleComponent,
      SelectHeaderComponent,
    ]),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
