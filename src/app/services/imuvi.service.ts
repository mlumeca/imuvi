import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieVideoResponse, TrendingResponse, UpcomingMoviesResponse } from '../models/home.interface';
import { TrendingActorsResponse } from '../models/homeActors.interface';
import { environment } from '../../environments/environment';
import { TranslationService } from './translation.service';

@Injectable({
  providedIn: 'root'
})
export class ImuviService {

  constructor(private http: HttpClient, private translationService: TranslationService) { }


  getTrending(): Observable<TrendingResponse> {
    return this.http.get<TrendingResponse>(`${environment.apiBaseUrl}/trending/all/week?api_key=${environment.apiKey}&language=${this.translationService.getLanguage()}`);
  }

  getTrendingActor(): Observable<TrendingActorsResponse> {
    return this.http.get<TrendingActorsResponse>(`${environment.apiBaseUrl}/trending/person/week?api_key=${environment.apiKey}&language=${this.translationService.getLanguage()}`);
  }

  getUpcomingMovies(): Observable<UpcomingMoviesResponse> {
    return this.http.get<UpcomingMoviesResponse>(`${environment.apiBaseUrl}/movie/upcoming?api_key=${environment.apiKey}&language=${this.translationService.getLanguage()}`);
  }
  
  getMovieVideoById(movieId: number): Observable<MovieVideoResponse> {
    return this.http.get<MovieVideoResponse>(`${environment.apiBaseUrl}/movie/${movieId}/videos?api_key=${environment.apiKey}`);
  }
}