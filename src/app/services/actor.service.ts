import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActorDetailResponse, Cast, CreditsResponse } from '../models/actor-detail.interface';
import { ActorListResponse } from '../models/actor-list.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor(private http: HttpClient) { }

  getPopular(): Observable<ActorListResponse> {
    return this.http.get<ActorListResponse>(
      `${environment.apiBaseUrl}/person/popular?api_key=${environment.apiKey}`
    );
  }

  getOneActor(id: string): Observable<ActorDetailResponse> {
    return this.http.get<ActorDetailResponse>(`${environment.apiBaseUrl}/person/${id}?api_key=${environment.apiKey}`)
  }

  getCast(id: string): Observable<CreditsResponse> {
    return this.http.get<CreditsResponse>(`${environment.apiBaseUrl}/person/${id}/combined_credits?api_key=${environment.apiKey}`)
  }

  getPeoplePage(page: number): Observable<ActorListResponse> {
    return this.http.get<ActorListResponse>(
      `${environment.apiBaseUrl}/person/popular?page=${page}&api_key=${environment.apiKey}`
    );
  }

  getActorByName(name: string): Observable<ActorListResponse> {
    return this.http.get<ActorListResponse>(
      `https://api.themoviedb.org/3/search/person?query=${name}&api_key=${API_KEY}`
    );
  }
}

