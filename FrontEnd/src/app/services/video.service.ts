import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private apiUrl = 'http://backend:3000/api/youtube';

  constructor(private http: HttpClient) {}

  searchVideos(query: string, maxResults: number = 10): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/search`, {
      params: { query, maxResults },
    });
  }
}
