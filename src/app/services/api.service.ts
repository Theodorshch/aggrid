import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiUrls } from '../shared/api-urls';
import { RawData } from '../shared/data';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private youTubeApiKey = 'AIzaSyDUCM8W7YdjJp0UwEOtYaj2fINO_qJ7Z-s';

  constructor(private http: HttpClient) { }

  getRawVideos(): Observable<RawData> {
    const url = `${ApiUrls.YouTubeApi}`;
    const params = new HttpParams()
      .append('key', this.youTubeApiKey)
      .append('maxResults', '50')
      .append('type', 'video')
      .append('part', 'snippet')
      .append('q', 'john');
    return this.http.get<RawData>(url, {params});
  }
}
