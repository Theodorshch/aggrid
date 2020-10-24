import { TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { DataService } from './services/data.service';

describe('AppComponent', () => {
  const dataServiceStub = {
    getVideos: () => {}
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: DataService, useValue: dataServiceStub }
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
