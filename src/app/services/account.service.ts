import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountDetailsResponse } from '../models/account-details.interface';
import { UserListsResponse } from '../models/user-lists.interface';
const API_KEY = '6167e502c63acdce5db7c32294a559d3';
const API_BASE_URL = 'https://api.themoviedb.org/3';
import { MovieListResponse } from '../models/movie-list.interface';
import { SerieListResponse } from '../models/series-list.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private http: HttpClient) { }

  getAccountDetails(): Observable<AccountDetailsResponse> {
    let sessionId = localStorage.getItem('session_id');
    return this.http.get<AccountDetailsResponse>(
      `${environment.apiBaseUrl}/account?api_key=${environment.apiKey}&session_id=${sessionId}`
    );
  }

  getRatedMovies(account_id: string): Observable<MovieListResponse> {
    let sessionId = localStorage.getItem('session_id');
    return this.http.get<MovieListResponse>(
      `${environment.apiBaseUrl}/account/${account_id}/rated/movies?api_key=${environment.apiKey}&session_id=${sessionId}`
    );
  }

  getRatedSeries(account_id: string): Observable<SerieListResponse> {
    let sessionId = localStorage.getItem('session_id');
    return this.http.get<SerieListResponse>(
      `${environment.apiBaseUrl}/account/${account_id}/rated/tv?api_key=${environment.apiKey}&session_id=${sessionId}`
    );
  }

  getUserLists(userId: number): Observable<UserListsResponse> {
    const sessionId = localStorage.getItem('session_id');
    return this.http.get<UserListsResponse>(`https://api.themoviedb.org/3/account/${userId}/lists?api_key=${API_KEY}&session_id=${sessionId}`
    );
  }

  createList(listName: string, listDesc: string): Observable<any> {
    return this.http.post(`${API_BASE_URL}/list?api_key=${API_KEY}&session_id=${localStorage.getItem('session_id')}`, {
      name: listName,
      description: listDesc
    });
  }

  getListDetailById(listId: number): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/list/${listId}?api_key=${API_KEY}`
    );
  }


  getWatchListTv(account_id: string): Observable<SerieListResponse> {
    let sessionId = localStorage.getItem('session_id');
    return this.http.get<SerieListResponse>(
      `${environment.apiBaseUrl}/account/${account_id}/watchlist/tv?api_key=${environment.apiKey}&session_id=${sessionId}`
    );
  }

  getWatchListhMovie(account_id: string): Observable<MovieListResponse> {
    let sessionId = localStorage.getItem('session_id');
    return this.http.get<MovieListResponse>(
      `${environment.apiBaseUrl}/account/${account_id}/watchlist/movies?api_key=${environment.apiKey}&session_id=${sessionId}`
    );
  }



}