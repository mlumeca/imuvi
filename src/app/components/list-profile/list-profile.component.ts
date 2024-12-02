import { Component, TemplateRef } from '@angular/core';
import { Movie } from '../../models/movie-list.interface';
import { AccountService } from '../../services/account.service';
import { Serie } from '../../models/series-list.interface';
import { SerieService } from '../../services/serie.service';
import { MovieService } from '../../services/movie.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-profile',
  templateUrl: './list-profile.component.html',
  styleUrl: './list-profile.component.css'
})
export class ListProfileComponent {
  movieList: Movie[] = [];
  serieList: Serie[] = [];
  account_id: string = '';
  showMovies: boolean = true;
  showSeries: boolean = true;

  moviesCount: number = 0;
  seriesCount: number = 0;
  totalCount: number = 0;
  averageRating: number = 0;

  pageMovie = 1;
  totalPagesMovie = 1;

  pageSerie = 1;
  totalPagesSerie = 1;

  idElemento: number = 0;
  tipoElemento: string = '';
  closeResult = '';

  alertMessage: string | null = null;
  alertType: string = '';

  constructor(private accountService: AccountService, private serieService: SerieService, private movieService: MovieService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.account_id = localStorage.getItem('account_id') ?? '';
    this.updateValues();
    this.newPageMovies();
    this.newPageSeries();

  }
  newPageMovies(): void {
    this.accountService.getWatchListhMovieByPage(this.account_id, this.pageMovie).subscribe(resp => {
      this.movieList = resp.results;
      this.totalPagesMovie = resp.total_pages;
      this.updateValues();
    });
  }

  newPageSeries(): void {
    this.accountService.getWatchListTvByPage(this.account_id, this.pageSerie).subscribe(resp => {
      this.serieList = resp.results;
      this.totalPagesSerie = resp.total_pages;
      this.updateValues();
    });
  }
  
  onPageMovies(newPage: number): void {
    this.pageMovie = newPage;
    this.newPageMovies();
  }

  onPageSeries(newPage: number): void {
    this.pageSerie = newPage;
    this.newPageSeries();
  }


  getImage(path: string) {
    const base_url = 'https://image.tmdb.org/t/p/w500';
    return base_url + path;
  }

  getRatingPercentaje(number: number) {
    return number * 10;
  }

  calculateTotalCount(): void {
    const currentMoviesCount = this.movieList.length;
    const currentSeriesCount = this.serieList.length;
    this.totalCount = currentMoviesCount + currentSeriesCount;
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

  removeItem(id: number, tipo: string): void {
    this.account_id = localStorage.getItem('account_id') ?? '';
    if (tipo === 'movie') {
      this.accountService.removeMovieToWatchList(this.account_id, id).subscribe({});
      this.movieList = this.movieList.filter(movie => movie.id !== id);

    } else {
      this.accountService.removeSerieToWatchList(this.account_id, id).subscribe({});
      this.serieList = this.serieList.filter(serie => serie.id !== id);

    }
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

  ConfirmDelete(modal: any) {
    this.removeItem(this.idElemento, this.tipoElemento);
    this.modalService.dismissAll();

    this.showAlert('Item eliminado.', 'danger');
    modal.close();
  }

  showAlert(message: string, type: string) {
    this.alertMessage = message;
    this.alertType = type;
    setTimeout(() => {
      this.alertMessage = null;
    }, 3000);
  }

}
