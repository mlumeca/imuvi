import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountDetailsResponse } from '../models/account-details.interface';
import { MovieListResponse } from '../models/movie-list.interface';
import { SerieListResponse } from '../models/series-list.interface';

const API_KEY = '6167e502c63acdce5db7c32294a559d3';
const API_BASE_URL = 'https://api.themoviedb.org/3';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private http: HttpClient) {}

  getAccountDetails(): Observable<AccountDetailsResponse> {
    let sessionId = localStorage.getItem('session_id');
    return this.http.get<AccountDetailsResponse>(
      `${API_BASE_URL}/account?api_key=${API_KEY}&session_id=${sessionId}`
    );
  }

  getFavouriteMovies(account_id: string): Observable<MovieListResponse> {
    return this.http.get<MovieListResponse> (`https://api.themoviedb.org/3/account/${account_id}/favorite/movies`)

  }

  getFavouriteSeries(account_id: string): Observable<SerieListResponse> {
    return this.http.get<SerieListResponse> (`https://api.themoviedb.org/3/account/${account_id}/favorite/tv`)

  }
}