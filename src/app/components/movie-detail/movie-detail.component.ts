import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Cast, MovieCastResponse } from '../../models/movie-detail.interface';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent implements OnInit{
  movieCast: MovieCastResponse | undefined;
  cast: Cast[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getMovieCast(this.movieCast!.id).subscribe (response => {
      this.cast = response.cast;
    })
  }

	showNavigationArrows = true;
	showNavigationIndicators = true;
	images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);
}