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

  selectedGenres: number[] = [];

  minRating: number = 0;
  maxRating: number = 10;

  @Input() texto = '';

  firstAirDateFrom: string = '';
  firstAirDateTo: string = '';

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
      this.originalSerieList = this.serieList;
      this.totalPages = resp.total_pages;
    });
  }

  onPage(newPage: number): void {
    this.page = newPage;
    this.newPage();
  }

  filterByGenre(): void {
    if (this.selectedGenres.length === 0) {
      this.originalSerieList = this.serieList;
    } else {
      this.originalSerieList = this.serieList.filter(serie =>
        serie.genre_ids.some(genreId => this.selectedGenres.includes(genreId))
      );
    }
  }

  onGenreChange(genreId: number, isChecked: boolean): void {
    if (isChecked) {
      if (!this.selectedGenres.includes(genreId)) {
        this.selectedGenres.push(genreId);
      }
    } else {
      this.selectedGenres = this.selectedGenres.filter(id => id !== genreId);
    }
    this.applyFilters();
  }

  applyFilters(): void {
    this.originalSerieList = this.serieList;

    if (this.selectedGenres.length > 0) {
      this.originalSerieList = this.originalSerieList.filter(serie =>
        serie.genre_ids.some(genreId => this.selectedGenres.includes(genreId))
      );
    }

    this.originalSerieList = this.originalSerieList.filter(serie =>
      serie.vote_average >= this.minRating && serie.vote_average <= this.maxRating
    );

    if (this.firstAirDateFrom) {
      this.originalSerieList = this.originalSerieList.filter(serie =>
        new Date(serie.first_air_date) >= new Date(this.firstAirDateFrom)
      );
    }
    if (this.firstAirDateTo) {
      this.originalSerieList = this.originalSerieList.filter(serie =>
        new Date(serie.first_air_date) <= new Date(this.firstAirDateTo)
      );
    }
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
