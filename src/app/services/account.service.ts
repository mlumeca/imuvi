import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountDetailsResponse } from '../models/account-details.interface';
import { UserListsResponse } from '../models/user-lists.interface';
import { MovieListResponse } from '../models/movie-list.interface';
import { SerieListResponse } from '../models/series-list.interface';
import { environment } from '../../environments/environment';
import { ListsResponse } from '../models/lists.interfaces';
import { ListDetailResponse } from '../models/list-detail.interfaces';

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
    return this.http.get<UserListsResponse>(`${environment.apiBaseUrl}/account/${userId}/lists?api_key=${environment.apiKey}&session_id=${sessionId}`
    );
  }

  createList(listName: string, listDesc: string): Observable<any> {
    return this.http.post(`${environment.apiBaseUrl}/list?api_key=${environment.apiKey}&session_id=${localStorage.getItem('session_id')}`, {
      name: listName,
      description: listDesc
    });
  }

  getListDetailById(listId: number): Observable<any> {
    return this.http.get(`${environment.apiBaseUrl}/list/${listId}?api_key=${environment.apiKey}`
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

  //FAVORITES
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

  createFav(account_id: string, mediaId: number, mediaType: 'movie' | 'tv', favorite: boolean): Observable<any> {
    const sessionId = localStorage.getItem('session_id');
    return this.http.post(`${environment.apiBaseUrl}/account/${account_id}/favorite?api_key=${environment.apiKey}&session_id=${localStorage.getItem('session_id')}`,{
        media_type: mediaType,
        media_id: mediaId,
        favorite: favorite,
      }
    );
  }

  deleteFav(
    mediaId: string,
    favorite: boolean
  ): Observable<any> {
    return this.deleteFav(mediaId, false);
  }
}