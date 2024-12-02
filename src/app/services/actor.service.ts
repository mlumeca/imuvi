import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActorDetailResponse, Cast, CreditsResponse } from '../models/actor-detail.interface';
import { ActorListResponse } from '../models/actor-list.interface';
import { environment } from '../../environments/environment';
import { TranslationService } from './translation.service';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor(private http: HttpClient, private translationService: TranslationService) { }
  
  getPopular(): Observable<ActorListResponse> {
    return this.http.get<ActorListResponse>(`${environment.apiBaseUrl}/person/popular?api_key=${environment.apiKey}&language=${this.translationService.getLanguage()}`);
  }

  getOneActor(id: string): Observable<ActorDetailResponse> {
    return this.http.get<ActorDetailResponse>(`${environment.apiBaseUrl}/person/${id}?api_key=${environment.apiKey}&language=${this.translationService.getLanguage()}`);
  }

  getCast(id: string): Observable<CreditsResponse> {
    return this.http.get<CreditsResponse>(`${environment.apiBaseUrl}/person/${id}/combined_credits?api_key=${environment.apiKey}&language=${this.translationService.getLanguage()}`);
  }

  getPeoplePage(page: number): Observable<ActorListResponse> {
    return this.http.get<ActorListResponse>(
      `${environment.apiBaseUrl}/person/popular?page=${page}&api_key=${environment.apiKey}&language=${this.translationService.getLanguage()}`);
    }

  getActorByName(name: string): Observable<ActorListResponse> {
    return this.http.get<ActorListResponse>(
      `https://api.themoviedb.org/3/search/person?query=${name}&api_key=${environment.apiKey}&language=${this.translationService.getLanguage()}`);
  }
}

