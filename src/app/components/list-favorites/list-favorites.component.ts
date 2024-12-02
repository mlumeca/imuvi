import { Component, TemplateRef } from '@angular/core';
import { Movie } from '../../models/movie-list.interface';
import { Serie } from '../../models/series-list.interface';
import { AccountService } from '../../services/account.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Item } from '../../models/list-detail.interfaces';
import { ListService } from '../../services/list.service';
import { StatusResponse } from '../../models/status-list.interfaces';

@Component({
  selector: 'app-list-favorites',
  templateUrl: './list-favorites.component.html',
  styleUrl: './list-favorites.component.css'
})
export class ListFavoritesComponent {

  constructor(private accountService: AccountService, private modalService: NgbModal, private listService: ListService) { }

  movieList: Movie[] = [];
  serieList: Serie[] = [];
  item: Item[] = [];
  account_id: string = '';
  totalCount: number = 0;
  averageRating: number = 0;
  totalItems: number = 0;
  idElemento: number = 0;
  tipoElemento: string = '';
  showMovies: boolean = true;
  showSeries: boolean = true;
  closeResult = '';
  moviePage = 1;
  seriesPage = 1;
  totalPages = 1;
  alertMessage: string | null = null;
  alertType: string = '';


  ngOnInit(): void {
    this.account_id = localStorage.getItem('account_id') ?? '';

    this.accountService.getFavMovies(this.account_id).subscribe(response => {
      this.movieList = response.results;
    });

    this.accountService.getFavSeries(this.account_id).subscribe(response => {
      this.serieList = response.results;
    });
  }


  getImage(path: string) {
    const base_url = 'https://image.tmdb.org/t/p/w500';
    return base_url + path;
  }

  calculateTotalCount(): void {
    const currentMoviesCount = this.movieList.length;
    const currentSeriesCount = this.serieList.length;
    this.totalCount = currentMoviesCount + currentSeriesCount;
  }

  getRatingPercentaje(number: number) {
    return number * 10;
  }

  calculateAverageRating(): void {
    let totalRating = 0;
    let totalItems = 0;
    this.movieList.forEach((movie) => {
      totalRating += movie.vote_average;
    });
    totalItems += this.movieList.length;

    this.serieList.forEach((serie) => {
      totalRating += serie.vote_average;
    });
    totalItems += this.serieList.length;

    this.averageRating = totalItems > 0 ? totalRating / totalItems : 0;
  }

  updateValues(): void {
    this.calculateTotalCount();
    this.calculateAverageRating();
  }

  openModal(content: TemplateRef<any>, id: number, tipo: string) {
    this.idElemento = id;
    this.tipoElemento = tipo;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
    );
  }

  open(content: TemplateRef<any>) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
    );
  }

  removeItem(id: number, tipo: string): void {
    this.account_id = localStorage.getItem('account_id') ?? '';
    if (tipo === 'movie') {
        this.accountService.deleteMovieFavorite(this.account_id, id).subscribe({});
            this.movieList = this.movieList.filter(movie => movie.id !== id);

    } else {
        this.accountService.deleteSerieFavorite(this.account_id ,id).subscribe({});
            this.serieList = this.serieList.filter(serie => serie.id !== id);

    }
  }

  ConfirmDelete(modal: any) {
    this.removeItem(this.idElemento, this.tipoElemento);
    this.modalService.dismissAll(); 

    this.showAlert('Item eliminado.', 'success');
    modal.close();
}

showAlert(message: string, type: string) {
  this.alertMessage = message;
  this.alertType = type;
  setTimeout(() => {
    this.alertMessage = null;
  }, 3000); 
}

  newPageMovies(): void {
    this.accountService.geFavoriteMovieByPage(this.account_id, this.moviePage).subscribe(resp => {
      this.movieList = resp.results;
      this.totalPages = resp.total_pages;
      this.updateValues();
    });
  }

  newPageSeries(): void {
    this.accountService.geFavoriteSerieByPage(this.account_id, this.seriesPage).subscribe(resp => {
      this.serieList = resp.results;
      this.totalPages = resp.total_pages;
      this.updateValues();
    });
  }
  onPageMovies(newPage: number): void {
    this.moviePage = newPage;
    this.newPageMovies();
  }

  onPageSeries(newPage: number): void {
    this.seriesPage = newPage;
    this.newPageSeries();
  }
}