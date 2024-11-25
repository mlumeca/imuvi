import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie, MovieGenre} from '../../models/movie-list.interface';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})

export class MovieListComponent implements OnInit {
  movieList: Movie[] = [];
  movieListFilt: Movie [] = [];
  movieGenre:  MovieGenre[] = [];
  page = 1;
  totalPages = 1;

  @Output() nameSerie = new EventEmitter<String>;
  @Output() nameMovie = new EventEmitter<String>;
  @Output() nameActor = new EventEmitter<String>;
  @Input() texto = '';
  
  constructor(private movieService: MovieService) {}


  ngOnInit(): void {
    this.newPage();
    this.movieService.getMovieGenre().subscribe (response => {
      this.movieGenre = response.genres;
    })
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

  getName(){
    this.nameActor.emit(this.texto);
    this.nameMovie.emit(this.texto);
    this.nameSerie.emit(this.texto);
  }
}





