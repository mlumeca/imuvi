import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_KEY = 'd3faeb037eb779bc62a224025b2f279e';
const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkM2ZhZWIwMzdlYjc3OWJjNjJhMjI0MDI1YjJmMjc5ZSIsIm5iZiI6MTczMTY2NzQyNC4wMjM4NTUyLCJzdWIiOiI2NzMxYmRkMWYzZWFmYzUyMDFmZDQwYWUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.lhZ-AdyTDAf8a-RUhIiaAkyWqeGeu8mKcaAPvCsqZdU';

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

  getPopularWithHeader() {
    return this.http.get(`https://api.themoviedb.org/3/movie/popular`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });
  }
}