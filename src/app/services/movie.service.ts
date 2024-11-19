import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieListResponse } from '../models/movie-list.interface';
import { MovieCreditResponse, MovieDetailResponse, MoviePlatformResponse } from '../models/movie-detail.interface';

const API_KEY = 'd3faeb037eb779bc62a224025b2f279e';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovieList(): Observable<MovieListResponse>{
    return this.http.get<MovieListResponse>(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
  }

  getOneMovie(id: string): Observable<MovieDetailResponse>{
    return this.http.get<MovieDetailResponse>(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
  }

  getMovieCredits(id: string): Observable<MovieCreditResponse>{
    return this.http.get<MovieCreditResponse>(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`)
  }

  getTranslatedTitle(id: string): Observable<MovieCreditResponse>{
    return this.http.get<MovieCreditResponse>(`https://api.themoviedb.org/3/movie/${id}/alternative_titles?api_key=${API_KEY}`)
  }

  getPlatforms(id: string): Observable<MoviePlatformResponse>{
    return this.http.get<MoviePlatformResponse>(`https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=${API_KEY}`)
  }
}