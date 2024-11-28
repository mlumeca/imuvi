import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountDetailsResponse } from '../models/account-details.interface';
import { MovieListResponse } from '../models/movie-list.interface';
import { SerieListResponse } from '../models/series-list.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private http: HttpClient) {}

  getAccountDetails(): Observable<AccountDetailsResponse> {
    let sessionId = localStorage.getItem('session_id');
    return this.http.get<AccountDetailsResponse>(
      `${environment.apiBaseUrl}/account?api_key=${environment.apiKey}&session_id=${sessionId}`
    );
  }

  getRatedMovies(account_id: string, page: number = 1): Observable<MovieListResponse> {
    let sessionId = localStorage.getItem('session_id');
    return this.http.get<MovieListResponse>(
      `${environment.apiBaseUrl}/account/${account_id}/rated/movies?api_key=${environment.apiKey}&session_id=${sessionId}&page=${page}`
    );
  }

  getRatedSeries(account_id: string, page: number = 1): Observable<SerieListResponse> {
    let sessionId = localStorage.getItem('session_id');
    return this.http.get<SerieListResponse>(
      `${environment.apiBaseUrl}/account/${account_id}/rated/tv?api_key=${environment.apiKey}&session_id=${sessionId}&page=${page}`
    );
  }
}