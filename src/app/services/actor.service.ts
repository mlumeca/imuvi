import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ActorDetailResponse} from '../models/actor-detail.interface';

const API_KEY = '6ea0f745f14c15097ec90310753616a0';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor(private http: HttpClient) {}

  getOneActor(id: number): Observable<ActorDetailResponse>{
    return this.http.get<ActorDetailResponse>(`https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY}`)
  }
}
