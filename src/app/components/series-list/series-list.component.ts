import { Component } from '@angular/core';
import { SerieGenre, SerieList } from '../../models/series-list.interface';
import { SerieService } from '../../services/serie.service';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrl: './series-list.component.css'
})
export class SeriesListComponent {
  serieList: SerieList[] = [];
  serieGenre:  SerieGenre[] = [];

  constructor(private serieService: SerieService) {}


  ngOnInit(): void {
    this.serieService.getSerieList().subscribe (response => {
      this.serieList = response.results;
    })

    this.serieService.getSerieGenre().subscribe (response => {
      this.serieGenre = response.genres;
    })
  }

  getImage(path: string) {
    const base_url = 'https://image.tmdb.org/t/p/w500';
    return base_url + path;
  }

  getRatingPercentaje(number: number) {
    return number * 10;
  }



}
