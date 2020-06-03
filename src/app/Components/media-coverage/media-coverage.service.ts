import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MediaCoverageService {
  constructor(private http: HttpClient) {}

  getMediaCoverage(): Observable<any> {
    return this.http.get(`../../../assets/data/mediaCoverage.json`);
  }
}
