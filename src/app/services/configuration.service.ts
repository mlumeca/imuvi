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

  currentLanguage: string = 'es-ES';

  getLanguages(): Observable<LanguagesListResponse> {
    return this.http.get<LanguagesListResponse>(
      `${environment.apiBaseUrl}/configuration/languages?api_key=${environment.apiKey}`
    );
  }

  setLanguage(language: string): void {
    this.currentLanguage = language;
    localStorage.setItem('language', language);
  }

  getLanguage(): string {
    return localStorage.getItem('language') || this.currentLanguage;
  }

}
