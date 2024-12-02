import { HttpClient } from '@angular/common/http';
import { ENVIRONMENT_INITIALIZER, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieCreditResponse, MovieDetailResponse, MovieMediaResponse, MoviePlatformResponse } from '../models/movie-detail.interface';
import { MovieGenreResponse, MovieListResponse } from '../models/movie-list.interface';
import { environment } from '../../environments/environment';
import { ConfigurationService } from './configuration.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient, private configService: ConfigurationService) { }

  
  getMovies() {
    return this.http.get<MovieListResponse>
    (`${environment.apiBaseUrl}/movie/popular?api_key=${environment.apiKey}&language=${this.configService.getLanguage()}`);
  }

  getOneMovie(id: string): Observable<MovieDetailResponse> {
    return this.http.get<MovieDetailResponse>(`${environment.apiBaseUrl}/movie/${id}?api_key=${environment.apiKey}&language=${this.configService.getLanguage()}`);
  }

  getMovieCredits(id: string): Observable<MovieCreditResponse> {
    return this.http.get<MovieCreditResponse>(`${environment.apiBaseUrl}/movie/${id}/credits?api_key=${environment.apiKey}&language=${this.configService.getLanguage()}`);
  }

  getTranslatedTitle(id: string): Observable<MovieCreditResponse> {
    return this.http.get<MovieCreditResponse>(`${environment.apiBaseUrl}/movie/${id}/alternative_titles?api_key=${environment.apiKey}&language=${this.configService.getLanguage()}`);
  }

  getPlatforms(id: string): Observable<MoviePlatformResponse> {
    return this.http.get<MoviePlatformResponse>(`${environment.apiBaseUrl}/movie/${id}/watch/providers?api_key=${environment.apiKey}&language=${this.configService.getLanguage()}`);
  }

  getMedia(id: string): Observable<MovieMediaResponse> {
    return this.http.get<MovieMediaResponse>(`${environment.apiBaseUrl}/movie/${id}/images?include_image_language${this.configService.getLanguage()}&api_key=${environment.apiKey}`);
  }

  getMovieGenre(): Observable<MovieGenreResponse> {
    return this.http.get<MovieGenreResponse>(`${environment.apiBaseUrl}/genre/movie/list?api_key=${environment.apiKey}&language=${this.configService.getLanguage()}`);
  }

  getMoviesPage(page: number): Observable<MovieListResponse> {
    return this.http.get<MovieListResponse>(`${environment.apiBaseUrl}/movie/popular?page=${page}&api_key=${environment.apiKey}&language=${this.configService.getLanguage()}`);
  }

  getMovieByName(name: string): Observable<MovieListResponse> {
    return this.http.get<MovieListResponse>(`https://api.themoviedb.org/3/search/movie?query=${name}&api_key=${environment.apiKey}&language=${this.configService.getLanguage()}`);
  }
}
