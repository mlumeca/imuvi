import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieListResponse } from '../models/movie-list.interface';
import { MovieCastResponse, MovieDetailResponse } from '../models/movie-detail.interface';

const API_KEY = 'd3faeb037eb779bc62a224025b2f279e';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovieList(): Observable<MovieListResponse>{
    return this.http.get<MovieListResponse>(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
  }

  getOneMovie(id: number): Observable<MovieDetailResponse>{
    return this.http.get<MovieDetailResponse>(`https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY}`)
  }

  getMovieCast(id: number): Observable<MovieCastResponse>{
    return this.http.get<MovieCastResponse>(`https://api.themoviedb.org/3/person/${id}/credits?api_key=${API_KEY}`)
  }

}