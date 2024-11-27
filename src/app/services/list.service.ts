import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ListsResponse } from '../models/lists.interfaces';
import { ListDetailResponse } from '../models/list-detail.interfaces';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { StatusResponse } from '../models/status-list.interfaces';

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWEwZjc0NWYxNGMxNTA5N2VjOTAzMTA3NTM2MTZhMCIsIm5iZiI6MTczMjcyMDk0Mi4zMzgxMDIzLCJzdWIiOiI2NzMxYmRhNDdlZjJjMzFkNzhlZGFiZTUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ffvKGnyJ46_UmE93myVGNdOvgEOJBoMz82M1kX1EWXk'

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) { }


  getLists(account_id: string): Observable<ListsResponse> {
    let sessionId = localStorage.getItem('session_id');
    return this.http.get<ListsResponse>(
      `${environment.apiBaseUrl}/account/${account_id}/lists?api_key=${environment.apiKey}&session_id=${sessionId}`
    );
  }

  getOneList(idList: string): Observable<ListDetailResponse> {
    return this.http.get<ListDetailResponse>(
      `${environment.apiBaseUrl}/list/${idList}?api_key=${environment.apiKey}`
    );
  }

  addMovieToList(idList: string, mediaId: string): Observable<StatusResponse> {
    return this.http.post<StatusResponse>(`${environment.apiBaseUrl}/list/${idList}/add_item?api_key=${environment.apiKey}`, {
      media_type: "movie",
      media_id: mediaId,
      favorite: true
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
  }
}
