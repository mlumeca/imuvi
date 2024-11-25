import { Component, Input } from '@angular/core';
import { Serie, SerieGenre } from '../../models/series-list.interface';
import { SerieService } from '../../services/serie.service';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrl: './series-list.component.css'
})
export class SeriesListComponent {
  serieList: Serie[] = [];
  originalSerieList: Serie[] = [];
  serieGenre: SerieGenre[] = [];
  page = 1;
  totalPages = 1;

  @Input() texto = '';
  constructor(private serieService: SerieService) { }


  ngOnInit(): void {
    this.newPage();
    this.serieService.getSerieGenre().subscribe(response => {
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

  newPage(): void {
    this.serieService.getSeriePage(this.page).subscribe(resp => {
      this.serieList = resp.results;
      this.originalSerieList = [...this.serieList]; // Almacenar la lista original aquí
      this.totalPages = resp.total_pages;
    });
  }

  onPage(newPage: number): void {
    this.page = newPage;
    this.newPage();
  }

  searchingSerie(name: string): void {
    if (name.trim() !== '') {
      this.serieService.getSerieByName(name).subscribe(resp => {
        this.serieList = resp.results;
      });
    } else {
      this.serieList = [...this.originalSerieList];
    }
  }

}
