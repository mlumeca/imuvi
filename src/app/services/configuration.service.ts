import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LanguagesListResponse } from '../models/configuration.interfaces';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor(private http: HttpClient) { }

  getLanguages(): Observable<LanguagesListResponse> {
    return this.http.get<LanguagesListResponse>(
      `${environment.apiBaseUrl}/configuration/languages?api_key=${environment.apiKey}`
    );
  }
}
