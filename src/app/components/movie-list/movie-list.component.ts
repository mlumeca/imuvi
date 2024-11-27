import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie, MovieGenre } from '../../models/movie-list.interface';
import { MovieService } from '../../services/movie.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalListComponent } from '../modal-list/modal-list.component';

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


  constructor(private movieService: MovieService, private modalService: NgbModal) { }


  selectedGenres: number[] = [];

  minRating: number = 0;
  maxRating: number = 10;

  @Input() texto = '';

  releaseDateFrom: string = '';
  releaseDateTo: string = '';

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

  onGenreChange(genreId: number, isChecked: boolean): void {
    if (isChecked) {
      if (!this.selectedGenres.includes(genreId)) {
        this.selectedGenres.push(genreId);
      }
    } else {
      this.selectedGenres = this.selectedGenres.filter(id => id !== genreId);
    }
    this.applyFilters();
  }

  applyFilters(): void {
    this.movieListFilt = this.movieList;

    if (this.selectedGenres.length > 0) {
      this.movieListFilt = this.movieListFilt.filter(movie =>
        movie.genre_ids.some(genreId => this.selectedGenres.includes(genreId))
      );
    }

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

}
