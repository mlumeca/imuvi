import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SerieListResponse } from '../models/series-list.interface';

const API_KEY = 'd3faeb037eb779bc62a224025b2f279e';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  constructor(private http: HttpClient) { }

  getSerieList(): Observable<SerieListResponse>{
    return this.http.get<SerieListResponse>(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`)
  }
}
