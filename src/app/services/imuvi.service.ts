import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_KEY = 'd3faeb037eb779bc62a224025b2f279e';

@Injectable({
  providedIn: 'root'
})
export class ImuviService {

  constructor(private http: HttpClient) { }

  getPopular() {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
    );
  }

}