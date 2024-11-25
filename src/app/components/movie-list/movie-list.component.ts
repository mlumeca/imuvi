import { Component, OnInit } from '@angular/core';
import { Movie, MovieGenre} from '../../models/movie-list.interface';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})

export class MovieListComponent implements OnInit {
  movieList: Movie[] = [];
  movieGenre:  MovieGenre[] = [];
  page = 1;
  totalPages = 1;
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
      this.totalPages = resp.total_pages;
    });
  }

  onPage(newPage: number): void {
    this.page = newPage;
    this.newPage();
  }

}



