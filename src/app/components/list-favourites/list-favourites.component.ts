import { Component } from '@angular/core';
import { Movie } from '../../models/movie-list.interface';
import { Serie } from '../../models/series-list.interface';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-list-favourites',
  templateUrl: './list-favourites.component.html',
  styleUrl: './list-favourites.component.css'
})
export class ListFavouritesComponent {

  constructor(private accountService: AccountService) { }

  movieList: Movie[] = [];
  serieList: Serie[] = [];
  account_id: string = '';
  movie_id: string = '';
  totalCount: number = 0;
  averageRating: number = 0;
  totalItems: number = 0;
  totalHours: number = 0;
  totalMinutes: number = 0;
  favourite: boolean = false;
  

  ngOnInit(): void {
    this.account_id = localStorage.getItem('account_id') ?? '';

    this.accountService.getFavMovies(this.account_id).subscribe(response => {
      this.movieList = response.results;
    });

    this.accountService.getFavSeries(this.account_id).subscribe(response => {
      this.serieList = response.results;
    });
  }

  getImage(path: string) {
    const base_url = 'https://image.tmdb.org/t/p/w500';
    return base_url + path;
  }

  getRatingPercentaje(number: number) {
    return number * 10;
  }

  getAverageRating(): void {
    let totalRating = 0;
    
    this.accountService.getFavMovies(this.account_id).subscribe((moviesResponse) => {
      this.accountService.getFavSeries(this.account_id).subscribe((seriesResponse) => {
        this.totalCount = moviesResponse.results.length + seriesResponse.results.length;
      });
    });

    this.accountService.getFavMovies(this.account_id).subscribe((moviesResponse) => {
      moviesResponse.results.forEach((movie) => {
        totalRating += movie.vote_average;
      });
      this.totalItems += moviesResponse.results.length;

      this.accountService.getFavSeries(this.account_id).subscribe((seriesResponse) => {
        seriesResponse.results.forEach((serie) => {
          totalRating += serie.vote_average;
        });
        this.totalItems += seriesResponse.results.length;

        this.averageRating = this.totalItems > 0 ? totalRating / this.totalItems : 0;
      });
    });
  }

  deleteFavourite(id: number, tipo: 'movie' | 'serie'): void {
    if (tipo === 'movie') {
      this.accountService.deleteFav(this.account_id, false).subscribe({});
          this.movieList = this.movieList.filter(movie => movie.id !== id);

  } else {
      this.accountService.deleteFav(this.account_id, false).subscribe({});
          this.serieList = this.serieList.filter(serie => serie.id !== id);

  }
}
  // getTotalDuration() {
  //   for (let this.totalItems = i; )
  // }
}