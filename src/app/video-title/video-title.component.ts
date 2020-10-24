import { Component } from '@angular/core';
import { Title } from '../shared/data';

export interface Params {
  value: Title;
}

@Component({
  selector: 'app-video-title',
  templateUrl: './video-title.component.html',
  styleUrls: ['./video-title.component.scss']
})
export class VideoTitleComponent {
  params: Params;

  agInit(params: Params): void {
    this.params = params;
  }
}
