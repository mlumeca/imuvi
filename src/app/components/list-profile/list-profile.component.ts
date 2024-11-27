import { Component } from '@angular/core';
import { Movie } from '../../models/movie-list.interface';
import { AccountService } from '../../services/account.service';
import { Serie } from '../../models/series-list.interface';

@Component({
  selector: 'app-list-profile',
  templateUrl: './list-profile.component.html',
  styleUrl: './list-profile.component.css'
})
export class ListProfileComponent {
  constructor(private accountService: AccountService) { }

  movieList: Movie[] = [];
  serieList: Serie[] = [];
  account_id: string = '';
  showMovies: boolean = true;
  showSeries: boolean = true;
  moviesCount: number = 0;
  seriesCount: number = 0;
  totalCount: number = 0;
  averageRating: number = 0;


  ngOnInit(): void {
    this.account_id = localStorage.getItem('account_id') ?? '';
    this.accountService.getWatchListhMovie(this.account_id).subscribe(response => {
      this.movieList = response.results;
    });
    this.accountService.getWatchListTv(this.account_id).subscribe(response => {
      this.serieList = response.results;
    });
    this.calculateTotalCount();
    this.calculateAverageRating();
  }

  getImage(path: string) {
    const base_url = 'https://image.tmdb.org/t/p/w500';
    return base_url + path;
  }

  getRatingPercentaje(number: number) {
    return number * 10;
  }

  loadMoviesCount(): void {
    this.accountService.getWatchListhMovie(this.account_id).subscribe((response) => {
      this.moviesCount = response.results.length;
    });
  }

  loadSeriesCount(): void {
    this.accountService.getWatchListTv(this.account_id).subscribe((response) => {
      this.seriesCount = response.results.length;
    });
  }

  calculateTotalCount(): void {
    this.accountService.getWatchListhMovie(this.account_id).subscribe((moviesResponse) => {
      this.accountService.getWatchListTv(this.account_id).subscribe((seriesResponse) => {
        this.totalCount = moviesResponse.results.length + seriesResponse.results.length;
      });
    });
  }

  calculateAverageRating(): void {
    let totalRating = 0;
    let totalItems = 0;

    this.accountService.getWatchListhMovie(this.account_id).subscribe((moviesResponse) => {
      moviesResponse.results.forEach((movie) => {
        totalRating += movie.vote_average;
      });
      totalItems += moviesResponse.results.length;

      this.accountService.getWatchListTv(this.account_id).subscribe((seriesResponse) => {
        seriesResponse.results.forEach((serie) => {
          totalRating += serie.vote_average;
        });
        totalItems += seriesResponse.results.length;

        this.averageRating = totalItems > 0 ? totalRating / totalItems : 0;
      });
    });
  }
}
