import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RateService {

  constructor(private http: HttpClient) { }

  rateMovie(movieId: string, rating: number): Observable<any> {
    return this.http.post(`${environment.apiBaseUrl}/movie/${movieId}/rating?api_key=${environment.apiKey}&session_id=${localStorage.getItem('session_id')}`, {
      value: rating * 2
    });
  }

  getMovieRating(movieId: string): Observable<any> {
    return this.http.get(`${environment.apiBaseUrl}/movie/${movieId}/account_states?api_key=${environment.apiKey}&session_id=${localStorage.getItem('session_id')}`);
  }

  deleteMovieRating(movieId: number): Observable<any> {
    return this.http.delete(`${environment.apiBaseUrl}/movie/${movieId}/rating?api_key=${environment.apiKey}&session_id=${localStorage.getItem('session_id')}`);
  }
  
  rateSerie(seriesId: string, rating: number): Observable<any> {
    return this.http.post(`${environment.apiBaseUrl}/tv/${seriesId}/rating?api_key=${environment.apiKey}&session_id=${localStorage.getItem('session_id')}`, {
      value: rating * 2
    });
  }
  getSerieRating(seriesId: string): Observable<any> {
    return this.http.get(`${environment.apiBaseUrl}/tv/${seriesId}/account_states?api_key=${environment.apiKey}&session_id=${localStorage.getItem('session_id')}`);
  }

  deleteSerieRating(seriesId: number): Observable<any> {
    return this.http.delete(`${environment.apiBaseUrl}/tv/${seriesId}/rating?api_key=${environment.apiKey}&session_id=${localStorage.getItem('session_id')}`);
  }
}
