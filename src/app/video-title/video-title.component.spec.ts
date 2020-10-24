import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoTitleComponent } from './video-title.component';

describe('VideoTitleComponent', () => {
  let component: VideoTitleComponent;
  let fixture: ComponentFixture<VideoTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoTitleComponent);
    component = fixture.componentInstance;
    component.params = {value: {videoId: '', title: ''}};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
