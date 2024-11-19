import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TrendingResponse } from '../models/home.interface';
import { TrendingActorsResponse } from '../models/homeActors.interface';

const API_KEY = 'd3faeb037eb779bc62a224025b2f279e';

@Injectable({
  providedIn: 'root'
})
export class ImuviService {

  constructor(private http: HttpClient) { }


  getTrending(): Observable<TrendingResponse> {
    return this.http.get<TrendingResponse>(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`)
  }

  getTrendingActor(): Observable<TrendingActorsResponse> {
    return this.http.get<TrendingActorsResponse>(`https://api.themoviedb.org/3/trending/person/week?api_key=${API_KEY}`)
  }
}