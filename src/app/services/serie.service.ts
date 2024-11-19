import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SerieGenreResponse, SerieListResponse } from '../models/series-list.interface';
import { SeasonsResponse, SeriesCreditResponse, SeriesDetailResponse, SeriesMediaResponse, SeriesPlatformResponse } from '../models/series-detail.interface';

const API_KEY = 'd3faeb037eb779bc62a224025b2f279e';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  constructor(private http: HttpClient) { }

  getSerieList(): Observable<SerieListResponse>{
    return this.http.get<SerieListResponse>(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`)
  }

  getSerieGenre(): Observable<SerieGenreResponse>{
    return this.http.get<SerieGenreResponse>(`https://api.themoviedb.org/3/genre/tv/list?api_key=${API_KEY}`);
  }

  getOneSeries(id: string): Observable<SeriesDetailResponse>{
    return this.http.get<SeriesDetailResponse>(`https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}`)
  }
  
  getCredits(id: string): Observable<SeriesCreditResponse>{
    return this.http.get<SeriesCreditResponse>(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=${API_KEY}`)
  }

  getTranslatedTitle(id: string): Observable<SeriesCreditResponse>{
    return this.http.get<SeriesCreditResponse>(`https://api.themoviedb.org/3/tv/${id}/alternative_titles?api_key=${API_KEY}`)
  }

  getPlatforms(id: string): Observable<SeriesPlatformResponse>{
    return this.http.get<SeriesPlatformResponse>(`https://api.themoviedb.org/3/tv/${id}/watch/providers?api_key=${API_KEY}`)
  }

  getMedia(id: string): Observable<SeriesMediaResponse>{
    return this.http.get<SeriesMediaResponse>(`https://api.themoviedb.org/3/tv/${id}/images?api_key=${API_KEY}`)
  }

  getSeasons(id: string, season_number: string): Observable<SeasonsResponse>{
    return this.http.get<SeasonsResponse>(`https://api.themoviedb.org/3/tv/${id}/season/${season_number}?api_key=${API_KEY}`)
  }
}