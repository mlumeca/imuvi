import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cast, Crew, Flatrate25, SeriesCreditResponse, SeriesDetailResponse, SeriesMediaResponse } from '../../models/series-detail.interface';
import { SerieService } from '../../services/serie.service';

@Component({
  selector: 'app-series-detail',
  templateUrl: './series-detail.component.html',
  styleUrl: './series-detail.component.css'
})
export class SeriesDetailComponent implements OnInit{
  seriesId: string | null = '';
  oneSeries: SeriesDetailResponse | undefined;
  seriesCredits: SeriesCreditResponse | undefined;
  cast: Cast[] = [];
  crew: Crew[] = [];
  buyPlatform: Flatrate25[] = [];
  imgMedia: SeriesMediaResponse | undefined; 

  constructor(private seriesService: SerieService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.seriesId = this.route.snapshot.paramMap.get('id');

    this.seriesService.getOneSeries(this.seriesId!).subscribe (response => {
      this.oneSeries = response;
    })

    this.seriesService.getCredits(this.seriesId!).subscribe (response => {
      this.cast = response.cast;
    })

    this.seriesService.getCredits(this.seriesId!).subscribe (response => {
      this.crew = response.crew;
    })

    this.seriesService.getPlatforms(this.seriesId!).subscribe (response => {
      this.buyPlatform = response.results.ES.flatrate;
    })

    this.seriesService.getMedia(this.seriesId!).subscribe (response => {
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