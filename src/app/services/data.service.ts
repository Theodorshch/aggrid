import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { RowData } from '../shared/data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private apiService: ApiService) { }

  getVideos(): Observable<RowData[]> {
    return this.apiService.getRawVideos()
      .pipe(
        map(value => RowData.parseRawDataForTable(value))
      );
  }
}
