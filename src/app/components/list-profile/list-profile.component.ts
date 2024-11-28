import { Component } from '@angular/core';
import { Movie } from '../../models/movie-list.interface';
import { AccountService } from '../../services/account.service';
import { Serie } from '../../models/series-list.interface';
import { SerieService } from '../../services/serie.service';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-list-profile',
  templateUrl: './list-profile.component.html',
  styleUrl: './list-profile.component.css'
})
export class ListProfileComponent {

  constructor(private accountService: AccountService, private serieService: SerieService, private movieService: MovieService) { }

  movieList: Movie[] = [];
  serieList: Serie[] = [];
  account_id: string = '';
  showMovies: boolean = true;
  showSeries: boolean = true;
  moviesCount: number = 0;
  seriesCount: number = 0;
  totalCount: number = 0;
  averageRating: number = 0;
  moviePage = 1;
  seriesPage = 1;
  totalPages = 1;

  ngOnInit(): void {
    this.account_id = localStorage.getItem('account_id') ?? '';
    this.updateValues();
    this.newPageMovies();
    this.newPageSeries();

  }
  newPageMovies(): void {
    this.accountService.getWatchListhMovieByPage(this.account_id, this.moviePage).subscribe(resp => {
      this.movieList = resp.results;
      this.totalPages = resp.total_pages;
      this.updateValues();
    });
  }

  newPageSeries(): void {
    this.accountService.getWatchListTvByPage(this.account_id, this.seriesPage).subscribe(resp => {
      this.serieList = resp.results;
      this.totalPages = resp.total_pages;
      this.updateValues();
    });
  }
  onPageMovies(newPage: number): void {
    this.moviePage = newPage;
    this.newPageMovies();
  }

  onPageSeries(newPage: number): void {
    this.seriesPage = newPage;
    this.newPageSeries();
  }


  getImage(path: string) {
    const base_url = 'https://image.tmdb.org/t/p/w500';
    return base_url + path;
  }

  getRatingPercentaje(number: number) {
    return number * 10;
  }

  calculateTotalCount(): void {
    const currentMoviesCount = this.movieList.length;
    const currentSeriesCount = this.serieList.length;
    this.totalCount = currentMoviesCount + currentSeriesCount;
  }

  calculateAverageRating(): void {
    let totalRating = 0;
    let totalItems = 0;
    this.movieList.forEach((movie) => {
      totalRating += movie.vote_average;
    });
    totalItems += this.movieList.length;

    this.serieList.forEach((serie) => {
      totalRating += serie.vote_average;
    });
    totalItems += this.serieList.length;

    this.averageRating = totalItems > 0 ? totalRating / totalItems : 0;
  }

  updateValues(): void {
    this.calculateTotalCount();
    this.calculateAverageRating();
  }
}