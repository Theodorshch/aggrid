import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DataService } from './data.service';
import { ApiService } from './api.service';

describe('DataService', () => {
  let http: HttpTestingController;
  let service: DataService;
  let apiService: ApiService;

  const apiServiceStub = {
    getRawVideos: () => {}
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService, { provide: ApiService, useValue: apiServiceStub }]
    });
    service = TestBed.inject(DataService);
    apiService = TestBed.inject(ApiService);
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    http.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
