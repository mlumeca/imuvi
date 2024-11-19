import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Cast, Crew, Es, MovieCreditResponse, MovieDetailResponse, MoviePlatformResponse, Results } from '../../models/movie-detail.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent implements OnInit{
  movieId: string | null = '';
  oneMovie: MovieDetailResponse | undefined;
  movieCredits: MovieCreditResponse | undefined;
  cast: Cast[] = [];
  crew: Crew[] = [];
  platforms: MoviePlatformResponse | undefined;

  constructor(private movieService: MovieService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.movieId = this.route.snapshot.paramMap.get('id');

    this.movieService.getOneMovie(this.movieId!).subscribe (response => {
      this.oneMovie = response;
    })

    this.movieService.getMovieCredits(this.movieId!).subscribe (response => {
      this.cast = response.cast;
    })

    this.movieService.getMovieCredits(this.movieId!).subscribe (response => {
      this.crew = response.crew;
    })

    this.movieService.getPlatforms(this.movieId!).subscribe (response => {
      this.platforms = response;
    })
  }

  
  getImagen(url: string): string {
    return 'https://image.tmdb.org/t/p/w500' + url;
  }

  getPlatformLogo(url: string): string {
    return 'https://image.tmdb.org/t/p/original/' + url;
  }

	showNavigationArrows = true;
	showNavigationIndicators = true;
	images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);
}