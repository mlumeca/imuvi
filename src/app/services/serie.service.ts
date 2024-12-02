import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SerieGenreResponse, SerieListResponse } from '../models/series-list.interface';
import { SeasonsResponse, SeriesCreditResponse, SeriesDetailResponse, SeriesMediaResponse, SeriesPlatformResponse } from '../models/series-detail.interface';
import { environment } from '../../environments/environment';
import { ConfigurationService } from './configuration.service';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  constructor(private http: HttpClient, private configService: ConfigurationService) { }

  getSerieList(): Observable<SerieListResponse> {
    return this.http.get<SerieListResponse>(`${environment.apiBaseUrl}/tv/popular?api_key=${environment.apiKey}&language=${this.configService.getLanguage()}`);
  }

  getSerieGenre(): Observable<SerieGenreResponse> {
    return this.http.get<SerieGenreResponse>(`${environment.apiBaseUrl}/genre/tv/list?api_key=${environment.apiKey}&language=${this.configService.getLanguage()}`);
  }

  getOneSeries(id: string): Observable<SeriesDetailResponse> {
    return this.http.get<SeriesDetailResponse>(`${environment.apiBaseUrl}/tv/${id}?api_key=${environment.apiKey}&language=${this.configService.getLanguage()}`);
  }

  getCredits(id: string): Observable<SeriesCreditResponse> {
    return this.http.get<SeriesCreditResponse>(`${environment.apiBaseUrl}/tv/${id}/credits?api_key=${environment.apiKey}&language=${this.configService.getLanguage()}`);
  }

  getTranslatedTitle(id: string): Observable<SeriesCreditResponse> {
    return this.http.get<SeriesCreditResponse>(`${environment.apiBaseUrl}/tv/${id}/alternative_titles?api_key=${environment.apiKey}&language=${this.configService.getLanguage()}`);
  }

  getPlatforms(id: string): Observable<SeriesPlatformResponse> {
    return this.http.get<SeriesPlatformResponse>(`${environment.apiBaseUrl}/tv/${id}/watch/providers?api_key=${environment.apiKey}&language=${this.configService.getLanguage()}`);
  }

  getMedia(id: string): Observable<SeriesMediaResponse> {
    return this.http.get<SeriesMediaResponse>(`${environment.apiBaseUrl}/tv/${id}/images?api_key=${environment.apiKey}&language=${this.configService.getLanguage()}`);
  }

  getSeriePage(page: number): Observable<SerieListResponse> {
    return this.http.get<SerieListResponse>(`${environment.apiBaseUrl}/tv/popular?page=${page}&api_key=${environment.apiKey}&language=${this.configService.getLanguage()}`);
  }

  getSerieByName(name: string): Observable<SerieListResponse> {
    return this.http.get<SerieListResponse>(`https://api.themoviedb.org/3/search/tv?query=${name}&api_key=${environment.apiKey}&language=${this.configService.getLanguage()}`);
  }

}