import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountDetailsResponse } from '../models/account-details.interface';
import { UserListsResponse } from '../models/user-lists.interface';
import { MovieListResponse } from '../models/movie-list.interface';
import { SerieListResponse } from '../models/series-list.interface';
import { environment } from '../../environments/environment';
import { StatusResponse } from '../models/status-list.interfaces';
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
    return this.http.get<UserListsResponse>(`${environment.apiBaseUrl}/account/${userId}/lists?api_key=${environment.apiKey}&session_id=${sessionId}`);
  }

  createList(listName: string, listDesc: string): Observable<any> {
    return this.http.post(`${environment.apiBaseUrl}/list?api_key=${environment.apiKey}&session_id=${localStorage.getItem('session_id')}`, {
      name: listName,
      description: listDesc
    });
  }
  
  getListDetailById(listId:string): Observable<ListDetailResponse> {
    return this.http.get<ListDetailResponse>(`${environment.apiBaseUrl}/list/${listId}?api_key=${environment.apiKey}&session_id=${localStorage.getItem('session_id')}`);
  }

 
  deleteUserList(listId: string): Observable<any> {
    return this.http.delete(`${environment.apiBaseUrl}/list/${listId}?api_key=${environment.apiKey}&session_id=${localStorage.getItem('session_id')}`);
  }

  //NO DISPONIBLE EN V3
  updateUserList(listId: string, listName: string, listDesc: string): Observable<any> {
    return this.http.put(`https://api.themoviedb.org/4/list/${listId}?api_key=${environment.apiKey}&session_id=${localStorage.getItem('session_id')}`, {
      name: listName,
      description: listDesc
    });
  }


  getWatchListTv(account_id: string): Observable<SerieListResponse> {
    let sessionId = localStorage.getItem('session_id');
    return this.http.get<SerieListResponse>(
      `${environment.apiBaseUrl}/account/${account_id}/watchlist/tv?api_key=${environment.apiKey}&session_id=${sessionId}`
    );
  }

  getWatchListTvByPage(account_id: string, page: number): Observable<SerieListResponse> {
    let sessionId = localStorage.getItem('session_id');
    return this.http.get<SerieListResponse>(
      `${environment.apiBaseUrl}/account/${account_id}/watchlist/tv?api_key=${environment.apiKey}&page=${page}&session_id=${sessionId}`
    );
  }

  getWatchListhMovie(account_id: string): Observable<MovieListResponse> {
    let sessionId = localStorage.getItem('session_id');
    return this.http.get<MovieListResponse>(
      `${environment.apiBaseUrl}/account/${account_id}/watchlist/movies?api_key=${environment.apiKey}&session_id=${sessionId}`
    );
  }

  getWatchListhMovieByPage(account_id: string, page: number): Observable<MovieListResponse> {
    let sessionId = localStorage.getItem('session_id');
    return this.http.get<MovieListResponse>(
      `${environment.apiBaseUrl}/account/${account_id}/watchlist/movies?api_key=${environment.apiKey}&page=${page}&session_id=${sessionId}`
    );
  }

  addMovieToWatchList(account_id: string, idMovie: number): Observable<StatusResponse> {
    return this.http.post<StatusResponse>(`${environment.apiBaseUrl}/account/${account_id}/watchlist?api_key=${environment.apiKey}&session_id=${localStorage.getItem('session_id')}`, {
      media_type: "movie",
      media_id: idMovie,
      watchlist: true
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${environment.token}`
      }
    })
  }

  removeMovieToWatchList(account_id: string, idMovie: number): Observable<StatusResponse> {
    return this.http.post<StatusResponse>(`${environment.apiBaseUrl}/account/${account_id}/watchlist?api_key=${environment.apiKey}&session_id=${localStorage.getItem('session_id')}`, {
      media_type: "movie",
      media_id: idMovie,
      watchlist: false
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${environment.token}`
      }
    })
  }

  addSerieToWatchList(account_id: string, idSerie: number): Observable<StatusResponse> {
    return this.http.post<StatusResponse>(`${environment.apiBaseUrl}/account/${account_id}/watchlist?api_key=${environment.apiKey}&session_id=${localStorage.getItem('session_id')}`, {
      media_type: "tv",
      media_id: idSerie,
      watchlist: true
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${environment.token}`
      }
    })
  }

  removeSerieToWatchList(account_id: string, idSerie: number): Observable<StatusResponse> {
    return this.http.post<StatusResponse>(`${environment.apiBaseUrl}/account/${account_id}/watchlist?api_key=${environment.apiKey}&session_id=${localStorage.getItem('session_id')}`, {
      media_type: "tv",
      media_id: idSerie,
      watchlist: false
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${environment.token}`
      }
    })
  }

}