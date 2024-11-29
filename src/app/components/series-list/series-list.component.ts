import { Component, Input } from '@angular/core';
import { Serie, SerieGenre } from '../../models/series-list.interface';
import { SerieService } from '../../services/serie.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalListComponent } from '../modal-list/modal-list.component';
import { AccountService } from '../../services/account.service';
import { StatusResponse } from '../../models/status-list.interfaces';


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
  listName: string = '';
  listDesc: string = '';
  modalRef: NgbModalRef | undefined;

  selectedGenres: number[] = [];
  account_id: string = '';

  minRating: number = 0;
  maxRating: number = 10;

  @Input() texto = '';

  firstAirDateFrom: string = '';
  firstAirDateTo: string = '';
  http: any;

  alertMessage: string | null = null;
  alertType: string = 'success';


  constructor(private serieService: SerieService, private modalService: NgbModal, private accountService: AccountService) { }


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

  openModal() {
    this.modalRef = this.modalService.open(ModalListComponent);
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

  addTVWatchList(serieId: number) {
    this.account_id = localStorage.getItem('account_id') ?? '';
    this.accountService.addSerieToWatchList(this.account_id, serieId).subscribe((response:
      StatusResponse) => { console.log('sERIE added to watchlist:', response); }
    )
    this.showAlert('Elemento añadido a la lista.', 'success');

  }

  addSerieToFavoriteList(serieId: number) {
    this.account_id = localStorage.getItem('account_id') ?? '';
    this.accountService.addFavoriteSerie(this.account_id, serieId).subscribe((response:
      StatusResponse) => { console.log('Serie added to favorites:', response); }
    )
    this.showAlert('Elemento añadido a la lista.', 'success');
  }

  showAlert(message: string, type: string = 'success') {
    this.alertMessage = message;
    this.alertType = type;
    setTimeout(() => {
      this.alertMessage = null;
    }, 3000); 
  }
}
