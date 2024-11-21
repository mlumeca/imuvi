import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActorDetailResponse, Cast, CreditsResponse } from '../models/actor-detail.interface';
import { ActorListResponse } from '../models/actor-list.interface';

const API_KEY = '6167e502c63acdce5db7c32294a559d3';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor(private http: HttpClient) { }

  getPopular(): Observable <ActorListResponse> {
    return this.http.get<ActorListResponse>(
      `https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}`
    );
  }

  getOneActor(id: string): Observable<ActorDetailResponse> {
    return this.http.get<ActorDetailResponse>(`https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY}`)
  }

  getCast(id: string): Observable<CreditsResponse>{
    return this.http.get<CreditsResponse>(`https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=${API_KEY}`)
  }

}

