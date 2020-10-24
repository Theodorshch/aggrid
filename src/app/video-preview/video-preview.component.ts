import { Component } from '@angular/core';


export interface Params {
  value: string;
}

@Component({
  selector: 'app-video-preview',
  templateUrl: './video-preview.component.html',
  styleUrls: ['./video-preview.component.scss']
})
export class VideoPreviewComponent {
  params: Params;

  agInit(params: Params): void {
    this.params = params;
  }
}
