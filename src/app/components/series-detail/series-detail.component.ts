import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  Cast,
  Crew,
  Episode,
  Flatrate25,
  Season,
  SeriesCreditResponse,
  SeriesDetailResponse,
  SeriesMediaResponse,
} from '../../models/series-detail.interface';
import { SerieService } from '../../services/serie.service';
import { RateService } from '../../services/rate.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { StatusResponse } from '../../models/status-list.interfaces';
import { AccountService } from '../../services/account.service';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-series-detail',
  templateUrl: './series-detail.component.html',
  styleUrl: './series-detail.component.css',
})
export class SeriesDetailComponent implements OnInit {
  seriesId: string | null = '';
  oneSeries: SeriesDetailResponse | undefined;
  seriesCredits: SeriesCreditResponse | undefined;

  cast: Cast[] = [];
  crew: Crew[] = [];

  buyPlatform: Flatrate25[] = [];

  imgMedia: SeriesMediaResponse | undefined;
  seasons: Season[] = [];
  rating = 0;
  closeResult = '';
  alertMessage: string | null = null;
  alertType: string = 'success';
  modalRef: NgbModalRef | undefined;
  account_id: string = '';

  constructor(
    private seriesService: SerieService,
    private route: ActivatedRoute,
    private rateService: RateService,
    private modalService: NgbModal,
    private accountService: AccountService,
    private translationService: TranslationService
  ) { }

  ngOnInit(): void {
    this.seriesId = this.route.snapshot.paramMap.get('id');

    this.rateService.getSerieRating(this.seriesId!).subscribe((response) => {
      this.rating = response.rated.value / 2;
    });

    this.seriesService.getOneSeries(this.seriesId!).subscribe((response) => {
      this.oneSeries = response;
    });

    this.seriesService.getCredits(this.seriesId!).subscribe((response) => {
      this.cast = response.cast;
    });

    this.seriesService.getCredits(this.seriesId!).subscribe((response) => {
      this.crew = response.crew;
    });

    this.seriesService.getPlatforms(this.seriesId!).subscribe((response) => {
      this.buyPlatform = response.results.ES.flatrate;
    });

    this.seriesService.getMedia(this.seriesId!).subscribe((response) => {
      this.imgMedia = response;
    });

    this.seriesService.getOneSeries(this.seriesId!).subscribe((response) => {
      this.seasons = response.seasons;
    });

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

  getImgChapter(url: string): string {
    return 'https://media.themoviedb.org/t/p/w130_and_h195_bestv2' + url;
  }

  onRateChange(rating: number) {
    this.rateService.rateSerie(this.seriesId!, rating).subscribe({});
    this.rating = rating;
  }

  deleteRating(): void {
    this.rateService.deleteSerieRating(Number(this.seriesId)).subscribe({});
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

  getRatingPercentaje(number: number) {
    return number * 10;
  }

  addTVWatchList(serieId: number) {
    this.account_id = localStorage.getItem('account_id') ?? '';
    this.accountService.addSerieToWatchList(this.account_id, serieId).subscribe((response:
      StatusResponse) => { console.log('Serie added to watchlist:', response); }
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

  getText(key: string): string {
    return this.translationService.translate(key);
  }
}
