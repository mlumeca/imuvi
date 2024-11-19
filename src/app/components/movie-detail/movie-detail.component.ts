import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Buy27, Cast, Crew, MovieCreditResponse, MovieDetailResponse, MovieMediaResponse } from '../../models/movie-detail.interface';
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
  buyPlatform: Buy27[] = [];
  imgMedia: MovieMediaResponse | undefined; 

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
      this.buyPlatform = response.results.ES.buy;
    })

    this.movieService.getMedia(this.movieId!).subscribe (response => {
      this.imgMedia = response;
    })
  }

  
  getImagen(url: string): string {
    return 'https://image.tmdb.org/t/p/w500' + url;
  }

  getPlatformLogo(url: string): string {
    return 'https://image.tmdb.org/t/p/original' + url;
  }

  getImgMedia(url: string): string {
    return 'https://media.themoviedb.org/t/p/w533_and_h300_bestv2' + url;
  }

	showNavigationArrows = true;
	showNavigationIndicators = true;
	images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);
}