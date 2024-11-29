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
  favorite: boolean = false;
  idElemento: number = 0;
  tipoElemento: string = '';
  showMovies: boolean = true;
  showSeries: boolean = true;
  closeResult = '';
  moviePage = 1;
  seriesPage = 1;
  totalPages = 1;


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

  getRatingPercentaje(number: number) {
    return number * 10;
  }

  getAverageRating(): void {
    let totalRating = 0;

    this.accountService.getFavMovies(this.account_id).subscribe((moviesResponse) => {
      this.accountService.getFavSeries(this.account_id).subscribe((seriesResponse) => {
        this.totalCount = moviesResponse.results.length + seriesResponse.results.length;
      });
    });

    this.accountService.getFavMovies(this.account_id).subscribe((moviesResponse) => {
      moviesResponse.results.forEach((movie) => {
        totalRating += movie.vote_average;
      });
      this.totalItems += moviesResponse.results.length;

      this.accountService.getFavSeries(this.account_id).subscribe((seriesResponse) => {
        seriesResponse.results.forEach((serie) => {
          totalRating += serie.vote_average;
        });
        this.totalItems += seriesResponse.results.length;

        this.averageRating = this.totalItems > 0 ? totalRating / this.totalItems : 0;
      });
    });
  }

  calculateTotalCount(): void {
    this.totalCount = this.item.length;
  }

  calculateAverageRating(): void {
    if (!this.item || this.item.length === 0) {
      this.averageRating = 0;
      return;
    }

    let totalRating = this.item.reduce((sum, movie) => sum + movie.vote_average, 0);
    this.averageRating = totalRating / this.item.length;
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

  deleteMovieFromList(movieId: number) {
    this.confirmDelete("movie", movieId)
  }

  deleteSerieFromList(serieId: number) {
    this.confirmDelete("tv", serieId)
  }

  confirmDelete(mediaType: "movie" | "tv", idMovieSerie: number) {
    if (mediaType == "movie") {
      this.account_id = localStorage.getItem('account_id') ?? '';
      this.accountService.deleteFavorite(this.account_id, idMovieSerie, "movie").subscribe((response:
        StatusResponse) => { console.log('Movie deleted from favorites:', response); }
      )
    } else {
      this.account_id = localStorage.getItem('account_id') ?? '';
      this.accountService.deleteFavorite(this.account_id, idMovieSerie, "tv").subscribe((response:
        StatusResponse) => { console.log('Serie deleted from favorites:', response); }
      )
    }

    this.modalService.dismissAll();
  }

  newPageMovies(): void {
    this.accountService.geFavoriteSerieByPage(this.account_id, this.moviePage).subscribe(resp => {
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

  updateValues(): void {
    this.calculateTotalCount();
    this.calculateAverageRating();
  }
}