import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SeriesDetailResponse } from '../models/series-detail.interface';

const API_KEY = 'd3faeb037eb779bc62a224025b2f279e';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  constructor(private http: HttpClient) { }

  // getMovieList(): Observable<SeriesListResponse>{
  //   return this.http.get<MovieListResponse>(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
  // }

  getOneMovie(): Observable<SeriesDetailResponse>{
    return this.http.get<SeriesDetailResponse>(`https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY}`)
  }

}