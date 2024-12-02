import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie, MovieGenre } from '../../models/movie-list.interface';
import { MovieService } from '../../services/movie.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalListComponent } from '../modal-list/modal-list.component';
import { AccountService } from '../../services/account.service';
import { StatusResponse } from '../../models/status-list.interfaces';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})

export class MovieListComponent implements OnInit {

  movieList: Movie[] = [];
  movieListFilt: Movie[] = [];
  movieGenre: MovieGenre[] = [];

  page = 1;
  totalPages = 1;
  listName: string = '';
  listDesc: string = '';
  modalRef: NgbModalRef | undefined;
  account_id: string = '';

  selectedGenres: number[] = [];

  minRating: number = 0;
  maxRating: number = 10;

  @Input() texto = '';

  releaseDateFrom: string = '';
  releaseDateTo: string = '';

  alertMessage: string | null = null;
  alertType: string = 'success';
  

  constructor(private movieService: MovieService, private modalService: NgbModal, private accountService: AccountService) { }
  ngOnInit(): void {
    this.newPage();
    this.movieService.getMovieGenre().subscribe(response => {
      this.movieGenre = response.genres;
    });
  }

  getImage(path: string) {
    const base_url = 'https://image.tmdb.org/t/p/w500';
    return base_url + path;
  }

  getRatingPercentaje(number: number) {
    return number * 10;
  }

  newPage(): void {
    this.movieService.getMoviesPage(this.page).subscribe(resp => {
      this.movieList = resp.results;
      this.movieListFilt = this.movieList;
      this.totalPages = resp.total_pages;
    });
  }

  onPage(newPage: number): void {
    this.page = newPage;
    this.newPage();
  }


  openModal(movieId: number) {
    this.modalRef = this.modalService.open(ModalListComponent);
    this.modalRef.componentInstance.movieId = movieId;
  }

  filterByGenre(): void {
    if (this.selectedGenres.length === 0) {
      this.movieListFilt = this.movieList;
    } else {
      this.movieListFilt = this.movieList.filter(movie =>
        movie.genre_ids.some(genreId => this.selectedGenres.includes(genreId))
      );
    }
  }

  applyFilters(): void {
    this.movieListFilt = this.movieList;

    this.filterByGenre();

    this.movieListFilt = this.movieListFilt.filter(movie =>
      movie.vote_average >= this.minRating && movie.vote_average <= this.maxRating
    );

    if (this.releaseDateFrom) {
      this.movieListFilt = this.movieListFilt.filter(movie =>
        new Date(movie.release_date) >= new Date(this.releaseDateFrom)
      );
    }
    if (this.releaseDateTo) {
      this.movieListFilt = this.movieListFilt.filter(movie =>
        new Date(movie.release_date) <= new Date(this.releaseDateTo)
      );
    }
  }

  searchingMovie(name: string) {
    if (name.trim() !== '') {
      this.movieService.getMovieByName(name).subscribe(resp => {
        this.movieListFilt = resp.results;
      });
    } else {
      this.movieListFilt = [...this.movieList];
    }
  }

  addMoviWatchList(movieId: number) {
    this.account_id = localStorage.getItem('account_id') ?? '';
    this.accountService.addMovieToWatchList(this.account_id, movieId).subscribe((response:
      StatusResponse) => { console.log('Movie added to watchlist:', response); }
    )

    this.showAlert('Elemento añadido a la lista.', 'success');
  }

  addMovieToFavoriteList(movieId: number) {
    this.account_id = localStorage.getItem('account_id') ?? '';
    this.accountService.addFavoriteMovie(this.account_id, movieId).subscribe((response:
      StatusResponse) => { console.log('Movie added to favorites:', response); }
    )
    this.showAlert('Elemento añadido a la lista.', 'success');
  }
  
  showAlert(message: string, type: string = 'success') {
    this.alertMessage = message;
    this.alertType = type;
    setTimeout(() => {
      this.alertMessage = null;
    }, 3000); 
  }
}