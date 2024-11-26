import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { MovieListResponse } from '../models/movie-list.interface';
import { SerieListResponse } from '../models/series-list.interface';
import { FavResponse } from '../models/add-favourite.interface';

@Injectable({
  providedIn: 'root'
})
export class FavService {

  constructor(private http: HttpClient) { }

  getFavMovies(account_id: string): Observable<MovieListResponse> {
    let sessionId = localStorage.getItem('session_id');
    return this.http.get<MovieListResponse>(
      `${environment.apiBaseUrl}/account/${account_id}/favorite/movies?api_key=${environment.apiKey}&session_id=${sessionId}`
    );
  }

  getFavSeries(account_id: string): Observable<SerieListResponse> {
    let sessionId = localStorage.getItem('session_id');
    return this.http.get<SerieListResponse>(
      `${environment.apiBaseUrl}/account/${account_id}/favorite/tv?api_key=${environment.apiKey}&session_id=${sessionId}`
    );
  }

  // addFav(): Observable<FavResponse> {
  //   return this.http.post<FavResponse>(`${environment.apiBaseUrl}/account/${account_id}/favorite?api_key=${environment.apiKey}`);
  // }

  // createSession(): Observable<CreateSessionResponse> {
  //   return this.http.post<CreateSessionResponse>(
  //     `${environment.apiBaseUrl}/authentication/session/new?api_key=${environment.apiKey}`,
  //     {
  //       request_token: localStorage.getItem('token'),
  //     }
  //   );
  // }
}