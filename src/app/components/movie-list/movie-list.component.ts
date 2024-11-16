import { Component, OnInit } from '@angular/core';
import { MovieList } from '../../models/movie-list.interface';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})

export class MovieListComponent implements OnInit {
  movieList: MovieList[] = [];

  constructor(private movieService: MovieService) {}


  ngOnInit(): void {
    this.movieService.getMovieList().subscribe (response => {
      this.movieList = response.results;
    })
  }

  getImage(path: string) {
    const base_url = 'https://image.tmdb.org/t/p/w500';
    return base_url + path;
  }

}



