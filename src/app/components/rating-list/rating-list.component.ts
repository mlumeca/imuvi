import { Component, OnInit, TemplateRef } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { Movie } from '../../models/movie-list.interface';
import { Serie } from '../../models/series-list.interface';
import { RateService } from '../../services/rate.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-rating-list',
  templateUrl: './rating-list.component.html',
  styleUrl: './rating-list.component.css',
})
export class RatingListComponent implements OnInit {



  constructor(private accountService: AccountService,
    private rateService: RateService,
    private modalService: NgbModal,
  ) {}

  movieList: Movie [] = [];
  serieList: Serie [] = [];
  movieListFilt: Movie[] = [];
  idElemento: number= 0;
  tipoElemento: string = '';
  account_id: string = '';
  showMovies: boolean = true;
  showSeries: boolean = true;
  closeResult = '';

  pageMovie = 1;
  totalPagesMovie = 1;

  pageSerie = 1;
  totalPagesSerie = 1;

  ngOnInit(): void {
    this.account_id = localStorage.getItem('account_id') ?? '';
          
      this.accountService.getRatedMovies(this.account_id, 1).subscribe(response => {
        this.movieList = response.results;
        this.totalPagesMovie = response.total_pages;
      });
      
      this.accountService.getRatedSeries(this.account_id, 1).subscribe(response => {
        this.serieList = response.results;
        this.totalPagesSerie = response.total_pages;
      });
  }

  getImage(path: string) {
    const base_url = 'https://image.tmdb.org/t/p/w500';
    return base_url + path;
  }

  getRatingPercentaje(number: number) {
    return number * 10;
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

  ConfirmDelete() {
      this.deleteRating(this.idElemento, this.tipoElemento);
      this.modalService.dismissAll(); 
  }

  deleteRating(id: number, tipo: string) {
    if (tipo === 'movie') {
        this.rateService.deleteMovieRating(id).subscribe({});
            this.movieList = this.movieList.filter(movie => movie.id !== id);

    } else {
        this.rateService.deleteSerieRating(id).subscribe({});
            this.serieList = this.serieList.filter(serie => serie.id !== id);

    }
  }

  onPageMovie(newPage: number): void {
    this.pageMovie = newPage;
    this.newPageMovie();
  }

  onPageSerie(newPage: number): void {
    this.pageSerie = newPage;
    this.newPageSerie();
  }

  newPageMovie(): void {
    this.accountService.getRatedMovies(this.account_id, this.pageMovie).subscribe(response => {
      this.movieList = response.results;
      this.totalPagesMovie = response.total_pages;
    });
  }

  newPageSerie(): void {
    this.accountService.getRatedSeries(this.account_id, this.pageSerie).subscribe(response => {
      this.serieList = response.results;
      this.totalPagesSerie = response.total_pages;
    });
  }

}
