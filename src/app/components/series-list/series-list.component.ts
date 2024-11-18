import { Component } from '@angular/core';
import { SerieList } from '../../models/series-list.interface';
import { SerieService } from '../../services/serie.service';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrl: './series-list.component.css'
})
export class SeriesListComponent {
  serieList: SerieList[] = [];

  constructor(private serieService: SerieService) {}


  ngOnInit(): void {
    this.serieService.getSerieList().subscribe (response => {
      this.serieList = response.results;
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
