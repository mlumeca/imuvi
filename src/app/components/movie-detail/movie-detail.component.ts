import { Component, OnInit, TemplateRef } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Buy27, Cast, Crew, MovieCreditResponse, MovieDetailResponse, MovieMediaResponse } from '../../models/movie-detail.interface';
import { ActivatedRoute } from '@angular/router';
import { RateService } from '../../services/rate.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { StatusResponse } from '../../models/status-list.interfaces';
import { AccountService } from '../../services/account.service';
import { ModalListComponent } from '../modal-list/modal-list.component';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent implements OnInit {
  movieId: string | null = '';
  oneMovie: MovieDetailResponse | undefined;
  movieCredits: MovieCreditResponse | undefined;
  rating = 0;

  cast: Cast[] = [];
  crew: Crew[] = [];
  buyPlatform: Buy27[] = [];

  imgMedia: MovieMediaResponse | undefined;

  closeResult = '';

  account_id: string = '';
  modalRef: NgbModalRef | undefined;

  alertMessage: string | null = null;
  alertType: string = 'success';
  constructor(
    private movieService: MovieService, 
    private route: ActivatedRoute,
    private rateService: RateService,
    private modalService: NgbModal,
    private accountService: AccountService,
    private translationService: TranslationService
  ) { }

  ngOnInit(): void {
    this.movieId = this.route.snapshot.paramMap.get('id');

      this.rateService.getMovieRating(this.movieId!).subscribe(response => {
            this.rating = response.rated.value / 2;
        
      })

      this.movieService.getOneMovie(this.movieId!).subscribe(response => {
        this.oneMovie = response;
      })

      this.movieService.getMovieCredits(this.movieId!).subscribe(response => {
        this.cast = response.cast;
      })

      this.movieService.getMovieCredits(this.movieId!).subscribe(response => {
        this.crew = response.crew;
      })

      this.movieService.getPlatforms(this.movieId!).subscribe(response => {
        this.buyPlatform = response.results.ES.buy;
      })

      this.movieService.getMedia(this.movieId!).subscribe(response => {
        this.imgMedia = response;
      })

      this.translationService.initializeLanguage();
    
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

  getHours(hours: string){
    return this.oneMovie!.runtime / 60;
  }

  getRatingPercentaje(number: number) {
    return number * 10;
  }

  onRateChange(rating: number) {
    this.rateService.rateMovie(this.movieId!, rating).subscribe({});
    this.rating = rating;
  }

  deleteRating(): void {
    this.rateService.deleteMovieRating(Number(this.movieId)).subscribe({});
        this.rating = 0;
  }

  openModal(content: TemplateRef<any>) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
    );
  }


  ConfirmDelete() {
      this.deleteRating();
      this.modalService.dismissAll(); 
  }

  addMovieWatchList(movieId: number) {
    this.account_id = localStorage.getItem('account_id') ?? '';
    this.accountService.addMovieToWatchList(this.account_id, movieId).subscribe((response:
      StatusResponse) => { console.log('movie added to watchlist:', response); }
    )
    this.showAlert(this.getText('ITEM_ADDED_TO_LIST'), 'success');

  }

  addMovieToFavoriteList(movieId: number) {
    this.account_id = localStorage.getItem('account_id') ?? '';
    this.accountService.addFavoriteMovie(this.account_id, movieId).subscribe((response:
      StatusResponse) => { console.log('movie added to favorites:', response); }
    )
    this.showAlert(this.getText('ITEM_ADDED_TO_LIST'), 'success');
  }

  showAlert(message: string, type: string = 'success') {
    this.alertMessage = message;
    this.alertType = type;
    setTimeout(() => {
      this.alertMessage = null;
    }, 3000);
  }

  openModalCreate(movieId: number) {
    this.modalRef = this.modalService.open(ModalListComponent);
    this.modalRef.componentInstance.movieId = movieId;
  }

  getText(key: string): string {
    return this.translationService.translate(key);
  }
  
}
