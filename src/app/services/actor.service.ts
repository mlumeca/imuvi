import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActorListResponse } from '../models/actor-list.interface';
import { Observable } from 'rxjs';

const API_KEY = '02eee06c0d0ce5d4dd85d40bd993efe4';

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

}

