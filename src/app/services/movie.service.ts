import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieGenreResponse, MovieListResponse } from '../models/movie-list.interface';

const API_KEY = 'd3faeb037eb779bc62a224025b2f279e';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovieList(): Observable<MovieListResponse>{
    return this.http.get<MovieListResponse>(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
  }

  getMovieGenre(): Observable<MovieGenreResponse>{
    return this.http.get<MovieGenreResponse>(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`);
  }


}
